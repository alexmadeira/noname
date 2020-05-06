import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { Container } from './styles';

function Event({ y, x, event }) {
  const playerPosition = useSelector(state => state.walk.position);
  console.tron.log(event);
  if (playerPosition.x === x && playerPosition.y === y) {
    event();
  }
  return <Container />;
}

Event.propTypes = {
  y: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  event: PropTypes.func.isRequired,
};
export default memo(Event);
