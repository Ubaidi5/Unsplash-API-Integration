import imagesReducer from './imagesReducer';
import loadingREducer from './loadingReducer';
import errorReducer from './errorReducer';
import pageReducer from './pageReducer';
import statsReducer from './statsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    isLoading: loadingREducer,
    images: imagesReducer,
    error: errorReducer,
    nextPage: pageReducer,
    imageStats: statsReducer,
});

export default rootReducer;
