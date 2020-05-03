import React from 'react';

import { mapa1 } from '~/maps/mapa';

import { Container, Floor, Row } from './styles';

export default function Map() {
  return (
    <Container>
      {mapa1.map(row => (
        <Row key={Math.random().toString()}>
          {row.map(({ tile, up }) => (
            <Floor
              className={`${tile} ${up && 'up'} `}
              key={Math.random().toString()}
            />
          ))}
        </Row>
      ))}
    </Container>
  );
}
