export const selectErrorMessage = (state) => {
  return state.users.error;
};

export const selectUser = (state) => {
  return state.users.user;
};

export const selectCurrentUser = (state) => {
  return state.users.currentUser;
};
