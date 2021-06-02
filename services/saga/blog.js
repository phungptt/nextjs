import { get } from 'axios';
import { takeLatest, call } from 'redux-saga/effects';
import { messageType } from '../messageTypes';

function* getBlogs({ params, onSuccess, onFailure }) {
  try {
    const response = yield call(get, '/api/v1/blogs', params);

    onSuccess({
      data: {
        loading: false,
        items: response.items,
        totalCount: response.totalCount,
        currentPage: response.currentPage
      }
    });
  } catch (error) {
    onFailure(error);
  }
}

export default function* watcher() {
  yield takeLatest(messageType.blog.list, getBlogs);
}
