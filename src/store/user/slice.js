import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  performUserLogin: () => {},
  performUserLogout: () => {},
  performUserRegister: () => {},
  performGetCurrentUser: () => {},
};

const userSlice = createSlice({
  name: "users",
  initialState: {
    user: "",
    currentUser: {},
    error: null,
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
} = userSlice.actions;
export default userSlice.reducer;
