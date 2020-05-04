import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import Layer from './Layer';
import { Container, Row, Tile } from './styles';

function Map() {
  const { tiles, base, sprites } = useSelector(state => state.map);
  const development = process.env.NODE_ENV === 'development';

  return (
    <Container base={base} className={development && 'dev'}>
      {tiles.map(row => (
        <Row key={Math.random().toString()}>
          {row.map(({ tile, layers }) => (
            <Tile className={tile}>
              {layers.map(({ id, position, up, animate }) => (
                <Layer
                  key={Math.random().toString()}
                  sprite={sprites[id]}
                  position={position}
                  up={up}
                  animate={animate}
                />
              ))}
            </Tile>
          ))}
        </Row>
      ))}
    </Container>
  );
}
export default memo(Map);
