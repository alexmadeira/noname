import styled from 'styled-components';

import charactersSprite from '~/assets/characters/hero/player.png';
import { SPRITE_SIZE, WALK_SPACES } from '~/config/Constants';

export const Container = styled.div`
  height: ${WALK_SPACES}px;
  width: ${WALK_SPACES}px;
  position: absolute;
  top: ${props => props.position.y * WALK_SPACES}px;
  left: ${props => props.position.x * WALK_SPACES}px;
  transition: all 500ms linear;
  z-index: 10;
  &::after {
    content: '';
    position: absolute;
    background: url(${charactersSprite});
    background-position-y: -${props => props.facing * SPRITE_SIZE}px;
    background-position-x: -${props => props.walk * SPRITE_SIZE}px;
    left: -${WALK_SPACES / 2}px;
    top: -${WALK_SPACES}px;
    height: ${SPRITE_SIZE}px;
    width: 34px;
  }
`;
