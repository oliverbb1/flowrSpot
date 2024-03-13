import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  performGetAllFlowers: () => {},
};

const flowerSlice = createSlice({
  name: "flower",
  initialState: {
    flowers: [],
  },
  reducers: {
    setFlowers: (state, action) => {
      state.flowers = action.payload;
    },
    ...middlewareActions,
  },
});

export const { performGetAllFlowers, setFlowers } = flowerSlice.actions;

export default flowerSlice.reducer;
