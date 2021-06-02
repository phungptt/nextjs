import { all } from 'redux-saga/effects';
import contactWatcher from 'services/saga/contact';
import productWatcher from 'services/saga/product';
import blogWatcher from 'services/saga/blog';

export default function* saga() {
  yield all([contactWatcher(), productWatcher(), blogWatcher()]);
}
