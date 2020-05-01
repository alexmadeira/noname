import { useDispatch } from 'react-redux';

import useEventListener from '@use-it/event-listener';

import { setFacing, facingWalk } from '~/store/modules/facing/actions';
import {
  setWalkPositionDown,
  setWalkPositionLeft,
  setWalkPositionRight,
  setWalkPositionUp,
} from '~/store/modules/walk/actions';

export default function Facing() {
  const dispatch = useDispatch();

  useEventListener('keydown', ({ key }) => {
    if (key.indexOf('Arrow') === -1) return;

    const direction = key.replace('Arrow', '').toUpperCase();

    dispatch(setFacing(direction));
    dispatch(facingWalk());

    switch (direction) {
      case 'DOWN':
        dispatch(setWalkPositionDown());
        break;

      case 'LEFT':
        dispatch(setWalkPositionLeft());
        break;

      case 'RIGHT':
        dispatch(setWalkPositionRight());
        break;

      case 'UP':
        dispatch(setWalkPositionUp());
        break;

      default:
        break;
    }
  });

  return null;
}
