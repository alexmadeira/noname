import produce from 'immer';

import * as maps from '~/maps';

import types from './types';

const nome = 'cidade';

const INITIAL_STATE = { data: { ...maps[nome] } };

export default function map(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.setMap: {
        draft.data = { ...maps[action.payload.name] };
        break;
      }

      default:
    }
  });
}
