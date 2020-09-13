// import productSaga from './productSaga';

// export default productSaga
import {all}  from 'redux-saga/effects';
import {productSaga} from './productSaga';
import {authSaga} from './authSaga';

export default function* rootSaga() {
    yield all([
        ...authSaga,
        ...productSaga
    ])
  }