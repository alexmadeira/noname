import React from 'react';
import { useSelector } from 'react-redux';

import Character from '~/components/Character';
import Map from '~/components/Map';

import { Container } from './styles';

export default function Home() {
  const { position } = useSelector(state => state.walk);
  return (
    <Container>
      <div style={{ position: 'Absolute', right: 0, background: '#fff' }}>
        <p>Y:{position.y}</p>
        <p>X:{position.x}</p>
      </div>
      <Character />
      <Map />
    </Container>
  );
}
