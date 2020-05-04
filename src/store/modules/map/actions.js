import types from './types';

export function setMap(name) {
  return {
    type: types.setMap,
    payload: { name },
  };
}
