import types from './types';

export function setFacing(direction) {
  return {
    type: types.setFacing,
    payload: { direction },
  };
}

export function facingWalk() {
  return {
    type: types.facingWalk,
  };
}
