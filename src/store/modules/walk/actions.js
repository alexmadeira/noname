import types from './types';

export function setWalkPositionUp() {
  return {
    type: types.walkUp,
  };
}
export function setWalkPositionDown() {
  return {
    type: types.walkDown,
  };
}
export function setWalkPositionLeft() {
  return {
    type: types.walkLeft,
  };
}
export function setWalkPositionRight() {
  return {
    type: types.walkRight,
  };
}
