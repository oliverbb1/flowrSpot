import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import userReducer from "./user/slice";
import flowerReducer from "./flowers/slice";
const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    users: userReducer,
    flower: flowerReducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}
