import { post } from 'axios';
import { takeLatest, call } from 'redux-saga/effects';
import { messageType } from '../messageTypes';

function* submitContact({ params, onSuccess, onFailure }) {
  try {
    yield call(post, `/api/v1/contact`, params);
    onSuccess({ message: 'Thanks for your submission!' });
  } catch (error) {
    onFailure(error);
  }
}

export default function* watcher() {
  yield takeLatest(messageType.contact.submit, submitContact);
}
