export const selectErrorMessage = (state) => {
  return state.users.error;
};

export const selectUser = (state) => {
  return state.users.user;
};

export const selectCurrentUser = (state) => {
  return state.users.currentUser;
};
export const selectEditErrorMessage = (state) => {
  return state.users.editError;
};
export const selectModal = (state) => {
  return state.users.editModal;
};
