import types from './types';

export function setFacing(direction) {
  return {
    type: types.setFacing,
    payload: { direction },
  };
}
