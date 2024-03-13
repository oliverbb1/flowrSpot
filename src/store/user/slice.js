import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  performUserLogin: () => {},
  performUserLogout: () => {},
  performUserRegister: () => {},
};

const userSlice = createSlice({
  name: "users",
  initialState: {
    user: "",
    error: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.error = null;
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
  setRegisterFailure,
  setUser,
} = userSlice.actions;
export default userSlice.reducer;
