import { call, takeLatest, put } from 'redux-saga/effects'
import api from '../services/api'
import { creators } from './redux'

export function* watchSaga(){
    yield takeLatest("GET_NUMBERS_REQUEST",getNumbers)
}

export function* getNumbers(){
    try{
        const res = yield call(api.get, `/numbers`)
        const data = res.data
        yield put(creators.getNumbersSuccess(data))
    }
    catch(error){
        yield put(creators.getNumbersFailure("Erro ao recuperar os núms. disponíveis."))
    }
}

export default watchSaga
