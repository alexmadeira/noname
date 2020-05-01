import produce from 'immer';

import { WALK_STEPS } from '~/config/Constants';

import types from './types';

const INITIAL_STATE = {
  directions: {
    DOWN: 0,
    LEFT: 1,
    RIGHT: 2,
    UP: 3,
  },
  direction: 'DOWN',
  step: 0,
};

export default function facing(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.setFacing: {
        draft.direction = action.payload.direction;
        break;
      }
      case types.facingWalk: {
        draft.step = draft.step > 0 ? draft.step - 1 : WALK_STEPS - 1;
        break;
      }
      default:
    }
  });
}
