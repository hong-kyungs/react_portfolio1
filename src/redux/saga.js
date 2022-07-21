import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import { fetchMembers, fetchYoutube } from './api';
import * as types from './actionType';

export function* returnMembers() {
	try {
		const response = yield call(fetchMembers);
		// console.log(response);
		yield put({ type: types.MEMBERS.success, payload: response.data.members });
	} catch (err) {
		yield put({ type: types.MEMBERS.err, payload: err });
	}
}
export function* callMembers() {
	yield takeLatest(types.MEMBERS.start, returnMembers);
}

export function* returnYoutube() {
	try {
		const response = yield call(fetchYoutube);
		console.log(response);
		yield put({ type: types.YOUTUBE.success, payload: response.data.items });
	} catch (err) {
		yield put({ type: types.YOUTUBE.err, payload: err });
	}
}
export function* callYoutube() {
	yield takeLatest(types.YOUTUBE.start, returnYoutube);
}

export default function* rootSaga() {
	yield all([fork(callMembers), fork(callYoutube)]);
}
