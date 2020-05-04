import produce from 'immer';

import * as maps from '~/maps';

import types from './types';

const nome = 'cidade';

const INITIAL_STATE = { ...maps[nome] };

export default function map(state = INITIAL_STATE, action) {
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
