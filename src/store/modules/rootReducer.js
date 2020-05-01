import { combineReducers } from 'redux';

import facing from './facing/reducer';
import walk from './walk/reducer';

const reducers = combineReducers({ facing, walk });

export default reducers;
