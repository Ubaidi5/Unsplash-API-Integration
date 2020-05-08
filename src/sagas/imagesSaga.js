import { takeEvery, select, call, put } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImages } from '../api';
import { setImages, setError } from '../action';

const getPage = state => state.nextPage;

function* handleImages() {
    try {
        const page = yield select(getPage);
        const image = yield call(fetchImages, page);
        yield put(setImages(image));
    } catch (error) {
        //dispatch Error
        yield put(setError(error.toString()));
    }
}

function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImages);
}

export default watchImagesLoad;
