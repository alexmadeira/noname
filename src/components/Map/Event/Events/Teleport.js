import { memo } from 'react';
import { useDispatch } from 'react-redux';

import { setFacing } from '~/store/modules/facing/actions';
import { setMap } from '~/store/modules/map/actions';
import {
  setWalkPositionX,
  setWalkPositionY,
} from '~/store/modules/walk/actions';

function Teleport({ data }) {
  const { map, x, y, facing } = data;

  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(setWalkPositionX(x));
    dispatch(setWalkPositionY(y));
    dispatch(setFacing(facing));
    dispatch(setMap(map));
  }, 1);

  return null;
}

export default memo(Teleport);
