import { useDispatch } from 'react-redux';

import { setFacing } from '~/store/modules/facing/actions';
import { setMap } from '~/store/modules/map/actions';
import {
  setWalkPositionX,
  setWalkPositionY,
} from '~/store/modules/walk/actions';

export const Evento1 = () => {
  alert('voce chegou aqui');
};
export const Luta = () => {
  alert('Luta');
};

export const Fim = () => {
  const dispatch = useDispatch();
  dispatch(setWalkPositionX(10));
  dispatch(setWalkPositionY(10));
  dispatch(setFacing('LEFT'));
  dispatch(setMap('cidade2'));
};
