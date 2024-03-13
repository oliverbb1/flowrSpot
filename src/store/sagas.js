import * as userSagas from "./user/saga";
import * as flowerSagas from "./flowers/saga";

const sagas = {
  ...userSagas,
  ...flowerSagas,
};

export default sagas;
