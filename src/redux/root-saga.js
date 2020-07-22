import { all, call } from "redux-saga/effects";

// Import any saga you want to listen for here
import { cartSagas } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";

// Add the imported saga to the array
export default function* rootSaga() {
  yield all([call(cartSagas), call(userSagas), call(cartSagas)]);
}
