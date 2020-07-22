import { all, call } from "redux-saga/effects";

// Import any saga you want to listen for here
import { fetchCollectionsStart } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";

// Add the imported saga to the array
export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}
