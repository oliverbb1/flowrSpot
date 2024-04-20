import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  performUserLogin: () => {},
  performUserLogout: () => {},
  performUserRegister: () => {},
  performGetCurrentUser: () => {},
  performUpdateUser: () => {},
};

const userSlice = createSlice({
  name: "users",
  initialState: {
    user: "",
    currentUser: {},
    error: null,
    editError: null,
    editModal: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setRegisterFailure: (state, action) => {
      state.user = null;
      state.error = action.payload;
    },
    setEditUserError: (state, action) => {
      state.editError = action.payload;
    },
    setModal: (state, action) => {
      state.editModal = action.payload;
    },
    ...middlewareActions,
  },
});

export const {
  performUserLogin,
  performUserLogout,
  performUserRegister,
  performGetCurrentUser,
  setRegisterFailure,
  setCurrentUser,
  setUser,
  performUpdateUser,
  setEditUserError,
  setModal,
} = userSlice.actions;
export default userSlice.reducer;
