import { call, takeLatest, put } from "redux-saga/effects";
import api from "../services/api";
import { creators } from "./redux";

export function* watchSaga() {
  yield takeLatest("GET_NUMBERS_REQUEST", getNumbers);
}

export function* getNumbers({ payload }) {
  const { page, amount } = payload;
  try {
    const res = yield call(api.get, `/numbers?page=${page}&perPage=${amount}`);
    const {
      data: {
        meta: { totalPages },
        data
      }
    } = res;

    yield put(creators.getNumbersSuccess({ data, totalPages }));
  } catch (error) {
    yield put(
      creators.getNumbersFailure("Erro ao recuperar os números disponíveis.")
    );
  }
}

export default watchSaga;
