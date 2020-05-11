import types from './types';

export function setWalkPositionY(y) {
  return {
    type: types.walkY,
    payload: { y },
  };
}

export function setWalkPositionX(x) {
  return {
    type: types.walkX,
    payload: { x },
  };
}

export function setTeleport(teleport) {
  return {
    type: types.setTeleport,
    payload: { teleport },
  };
}
