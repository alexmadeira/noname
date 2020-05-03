import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  position: { x: 1, y: 1 },
};

export default function walk(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.walkY: {
        draft.position = { ...draft.position, y: action.payload.y };
        break;
      }
      case types.walkX: {
        draft.position = { ...draft.position, x: action.payload.x };
        break;
      }
      default:
    }
  });
}
