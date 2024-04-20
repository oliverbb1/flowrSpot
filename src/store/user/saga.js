import { call, put, takeLatest } from "redux-saga/effects";
import { userService } from "../../service/AuthService";
import {
  performUserLogin,
  performUserLogout,
  performUserRegister,
  performGetCurrentUser,
  setUser,
  setCurrentUser,
  setRegisterFailure,
  performUpdateUser,
  setEditUserError,
  setModal,
} from "./slice";

function* loginHandler(action) {
  console.log(action.payload);
  try {
    const { email, password } = action.payload;
    const { data } = yield call(userService.loginUser, email, password);
    const userData = data.auth_token;
    localStorage.setItem("accessToken", data.auth_token);
    console.log(userData);
    yield put(setUser(userData));
  } catch (error) {
    console.log(error);
    yield put(setRegisterFailure(error.response.data.error));
  }
}

function* registerHandler(action) {
  try {
    const { email, password, first_name, last_name, date_of_birth } =
      action.payload;
    const data = yield call(
      userService.registerUser,
      first_name,
      last_name,
      date_of_birth,
      password,
      email
    );
    const userData = data.data.auth_token;
    if (userData) {
      yield put(setModal(true));
      yield delay(1000);
      window.location.href = "/login";
    } else {
    }
  } catch (error) {
    yield put(setRegisterFailure(error.response.data.error));
  }

  // yield put(setModal(true));
  // yield delay(1000);
}

function* logoutHandler() {
  try {
    yield call(userService.logoutUser);
    localStorage.removeItem("accessToken");
    yield put(setUser(null));
  } catch (error) {
    console.log(error);
    // yield put(setRegisterFailure(error.response.data.message));
  }
}

function* getCurrentUserHandler({ payload }) {
  try {
    const data = yield call(userService.getCurrentUser, payload);
    let user = data;
    yield put(setCurrentUser(user));
    console.log(user);
  } catch (error) {
    // console.log(error);
  }
}

function* updateUserHandler(action) {
  const {
    first_name,
    last_name,
    password,
    password_confirmation,
    date_of_birth,
  } = action.payload;

  const data = yield call(
    userService.editUser,
    first_name,
    last_name,
    password,
    password_confirmation,
    date_of_birth
  );

  if (data.error) {
    yield put(setEditUserError(data.error));
  } else {
    yield put(setModal(true));
    yield delay(1000);
    window.location.href = "/profile";
  }
}
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* watchUsers() {
  yield takeLatest(performUserLogin.type, loginHandler);
  yield takeLatest(performUserLogout.type, logoutHandler);
  yield takeLatest(performUserRegister.type, registerHandler);
  yield takeLatest(performGetCurrentUser.type, getCurrentUserHandler);
  yield takeLatest(performUpdateUser.type, updateUserHandler);
}
