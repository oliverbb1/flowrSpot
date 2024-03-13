import { call, put, takeLatest } from "redux-saga/effects";
import { flowerService } from "../../service/FlowerService";
import { setFlowers } from "./slice";
import { performGetAllFlowers } from "./slice";

function* getAllFlowers({ payload }) {
  try {
    const data = yield call(flowerService.getFlowers, payload);
    // let flowers = data;
    yield put(setFlowers(data));
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export function* watchFlowers() {
  yield takeLatest(performGetAllFlowers.type, getAllFlowers);
}
