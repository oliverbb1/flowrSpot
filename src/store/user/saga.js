import { call, put, takeLatest } from "redux-saga/effects";
import { userService } from "../../service/AuthService";
import {
  performUserLogin,
  performUserLogout,
  performUserRegister,
  setUser,
  setRegisterFailure,
} from "./slice";

function* loginHandler(action) {
  console.log(action.payload);
  try {
    const { email, password } = action.payload;
    const { data } = yield call(userService.loginUser, email, password);
    const userData = data;
    localStorage.setItem("accessToken", data.auth_token);
    console.log(userData);
    yield put(setUser(userData));
  } catch (error) {
    console.log(error);
  }
}

function* registerHandler(action) {
  try {
    const { email, password, first_name, last_name, date_of_birth } =
      action.payload;
    console.log(action.payload);
    const { data } = yield call(
      userService.registerUser,
      first_name,
      last_name,
      date_of_birth,
      password, // Ovdje smo zamijenili mjesto passworda i emaila
      email
    );
    // console.log
    localStorage.setItem("accessToken", data.auth_token);
  } catch (error) {
    console.log(error);
    yield put(setRegisterFailure(error.response.data.error));
  }
}

function* logoutHandler() {
  try {
    yield call(userService.logoutUser);
    localStorage.removeItem("accessToken");
  } catch (error) {
    console.log(error);
  }
}

export function* watchUsers() {
  yield takeLatest(performUserLogin.type, loginHandler);
  yield takeLatest(performUserLogout.type, logoutHandler);
  yield takeLatest(performUserRegister.type, registerHandler);
}
