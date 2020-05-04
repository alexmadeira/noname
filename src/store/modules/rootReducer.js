import { combineReducers } from 'redux';

import facing from './facing/reducer';
import map from './map/reducer';
import walk from './walk/reducer';

const reducers = combineReducers({ facing, walk, map });

export default reducers;
