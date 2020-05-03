import { useDispatch, useSelector } from 'react-redux';

import useEventListener from '@use-it/event-listener';

import { mapa1 } from '~/maps/mapa';
import { setFacing, facingWalk } from '~/store/modules/facing/actions';
import {
  setWalkPositionX,
  setWalkPositionY,
} from '~/store/modules/walk/actions';

export default function Facing() {
  const dispatch = useDispatch();
  const { position } = useSelector(state => state.walk);

  function walkUp() {
    if (mapa1[position.y - 1][position.x].passing < 2) {
      dispatch(setWalkPositionY(position.y - 1));
    }
  }
  function walkDown() {
    if (mapa1[position.y + 1][position.x].passing < 2) {
      dispatch(setWalkPositionY(position.y + 1));
    }
  }
  function walkLeft() {
    if (mapa1[position.y][position.x - 1].passing < 2) {
      dispatch(setWalkPositionX(position.x - 1));
    }
  }
  function walkRight() {
    if (mapa1[position.y][position.x + 1].passing < 2) {
      dispatch(setWalkPositionX(position.x + 1));
    }
  }

  useEventListener('keydown', ({ key }) => {
    if (key.indexOf('Arrow') === -1) return;

    const direction = key.replace('Arrow', '').toUpperCase();

    dispatch(setFacing(direction));
    dispatch(facingWalk());

    switch (direction) {
      case 'DOWN':
        walkDown();
        break;

      case 'LEFT':
        walkLeft();
        break;

      case 'RIGHT':
        walkRight();
        break;

      case 'UP':
        walkUp();
        break;

      default:
        break;
    }
  });

  return null;
}
