import { put, call, take, fork } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImagesStats } from '../api';
import { loadImageStats, setImageStatsError, setImageStats } from '../action';

function* handleStatsRequest(id) {
    for (let i = 0; i < 3; i++) {
        try {
            yield put(loadImageStats(id));
            const res = yield call(fetchImagesStats, id);
            yield put(setImageStats(id, res.downloads.total));
            return true;
        } catch (err) {
            console.log(err);
        }
    }
    yield put(setImageStatsError(id));
}

export default function* watchImageStats() {
    while (true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS);
        for (let i = 0; i < images.length; i++) {
            yield fork(handleStatsRequest, images[i].id);
        }
    }
}
