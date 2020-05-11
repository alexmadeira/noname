import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import Events from './Events';
import { Container } from './styles';

function Event({ y, x, event }) {
  const playerPosition = useSelector(state => state.walk.position);

  return (
    <Container>
      {playerPosition.x === x && playerPosition.y === y && (
        <Events type={event.type} data={event.data} />
      )}
    </Container>
  );
}

Event.propTypes = {
  y: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  event: PropTypes.shape({
    type: PropTypes.string.isRequired,
    data: PropTypes.shape.isRequired,
  }).isRequired,
};
export default memo(Event);
