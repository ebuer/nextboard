import global from './global/slice';

import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    global
});

export default rootReducer;
