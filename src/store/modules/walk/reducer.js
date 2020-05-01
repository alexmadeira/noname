import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  position: { x: 0, y: 0 },
};

export default function walk(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.walkDown: {
        draft.position = { ...draft.position, y: draft.position.y + 1 };
        break;
      }
      case types.walkUp: {
        draft.position = { ...draft.position, y: draft.position.y - 1 };
        break;
      }
      case types.walkRight: {
        draft.position = { ...draft.position, x: draft.position.x + 1 };
        break;
      }
      case types.walkLeft: {
        draft.position = { ...draft.position, x: draft.position.x - 1 };
        break;
      }
      default:
    }
  });
}
