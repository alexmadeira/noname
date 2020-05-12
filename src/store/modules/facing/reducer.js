import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  directions: {
    DOWN: 0,
    LEFT: 1,
    RIGHT: 2,
    UP: 3,
  },
  direction: 'DOWN',
};

export default function facing(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.setFacing: {
        draft.direction = action.payload.direction;
        break;
      }

      default:
    }
  });
}
