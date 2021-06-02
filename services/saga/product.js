import { get } from 'axios';
import { takeEvery, takeLatest, call } from 'redux-saga/effects';
import { messageType } from '../messageTypes';

function* getData({ params, onSuccess, onFailure }) {
  try {
    const response = yield call(get, '/api/v1/products', { params });

    onSuccess({
      data: {
        loading: false,
        items: response
      }
    });
  } catch (error) {
    onFailure(error);
  }
}

function* getCategories({ onSuccess, onFailure }) {
  try {
    const response = yield call(get, '/api/v1/categories');

    onSuccess({
      data: {
        loading: false,
        items: response
      }
    });
  } catch (error) {
    onFailure(error);
  }
}

export default function* watcher() {
  yield takeLatest(messageType.product.list, getData);
  yield takeEvery(messageType.product.categories, getCategories);
}
