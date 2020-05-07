import base from '~/assets/base/glass.png';
import sprite2 from '~/assets/maps/cidade1/Outside_A2.png';
import sprite3 from '~/assets/maps/cidade1/Outside_B.png';
import sprite1 from '~/assets/maps/cidade1/sprite1.png';
import bgm from '~/assets/songs/bgm/bgm1.mp3';

import { Evento1, Luta, Fim } from './events';

export default {
  name: 'Cidade 1',
  base,
  sprites: [sprite1, sprite2, sprite3],
  bgm,
  tiles: [
    [
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 1 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 1 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 1 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 1 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 1 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 1 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 2 }, animate: true }],
      },
    ],
    [
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 1, x: 3 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 0,
        layers: [{ id: 0, up: false, position: { y: 5, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 0,
        layers: [{ id: 0, up: false, position: { y: 5, x: 1 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 0,
        layers: [{ id: 0, up: false, position: { y: 5, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 0,
        layers: [{ id: 0, up: false, position: { y: 5, x: 1 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 0,
        layers: [{ id: 0, up: false, position: { y: 5, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 0,
        layers: [{ id: 0, up: false, position: { y: 5, x: 1 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 0,
        layers: [{ id: 0, up: false, position: { y: 5, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 1, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [
          { id: 0, up: false, position: { y: 3, x: 1 }, animate: true },
          { id: 0, up: false, position: { y: 0, x: 12 }, animate: false },
        ],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [
          { id: 0, up: false, position: { y: 3, x: 2 }, animate: true },
          { id: 0, up: false, position: { y: 0, x: 13 }, animate: false },
        ],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 1 }, animate: true }],
      },
    ],
    [
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 4, x: 3 }, animate: true }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 4, x: 0 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 1 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [
          { id: 0, up: false, position: { y: 3, x: 2 }, animate: true },
          { id: 0, up: false, position: { y: 1, x: 12 }, animate: false },
        ],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [
          { id: 0, up: false, position: { y: 3, x: 1 }, animate: true },
          { id: 0, up: false, position: { y: 1, x: 13 }, animate: false },
        ],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 2 }, animate: true }],
      },
    ],
    [
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 3 }, animate: true }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [
          { id: 0, up: false, position: false },
          { id: 2, up: true, position: { y: 22, x: 10 }, animate: false },
        ],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [
          { id: 0, up: false, position: false },
          { id: 2, up: true, position: { y: 22, x: 11 }, animate: false },
        ],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 0 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 2 }, animate: true }],
      },
    ],
    [
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 4, x: 3 }, animate: true }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [
          { id: 0, up: false, position: false },
          { id: 2, up: true, position: { y: 23, x: 10 }, animate: false },
        ],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [
          { id: 0, up: false, position: false },
          { id: 2, up: true, position: { y: 23, x: 11 }, animate: false },
        ],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
        event: () => {
          Luta();
        },
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 0, x: 0 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 2, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 2, x: 1 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 0, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 1 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 1 }, animate: true }],
      },
    ],
    [
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 3 }, animate: true }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [
          { id: 0, up: false, position: false },
          { id: 2, up: true, position: { y: 24, x: 10 }, animate: false },
        ],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [
          { id: 0, up: false, position: false },
          { id: 2, up: true, position: { y: 24, x: 11 }, animate: false },
        ],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: { y: 1, x: 0 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 0,
        layers: [{ id: 0, up: false, position: { y: 5, x: 1 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 0,
        layers: [{ id: 0, up: false, position: { y: 5, x: 1 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 5, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 1, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 1 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 1 }, animate: true }],
      },
    ],
    [
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 4, x: 3 }, animate: true }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
        event: () => {
          Evento1();
        },
      },
      {
        tile: 'grass01',
        passing: 2,
        layers: [
          { id: 0, up: false, position: false },
          { id: 2, up: false, position: { y: 25, x: 10 }, animate: false },
        ],
      },
      {
        tile: 'grass01',
        passing: 2,
        layers: [
          { id: 0, up: false, position: false },
          { id: 2, up: false, position: { y: 25, x: 11 }, animate: false },
        ],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 4, x: 0 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 1 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 1 }, animate: true }],
      },
    ],
    [
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 3 }, animate: true }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 0 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 2 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 1 }, animate: true }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 2 }, animate: true }],
      },
    ],
    [
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 4, x: 3 }, animate: true }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: false }],
      },
    ],
    [
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 3, x: 3 }, animate: true }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
        event: () => {
          Fim();
        },
      },
    ],
    [
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: { y: 4, x: 3 }, animate: true }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'grass01',
        passing: 0,
        layers: [{ id: 0, up: false, position: false }],
        event: () => {
          Fim();
        },
      },
    ],
    [
      {
        tile: 'water',
        passing: 2,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'rock',
        passing: 2,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'rock',
        passing: 2,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'rock',
        passing: 2,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'rock',
        passing: 2,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'rock',
        passing: 2,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'rock',
        passing: 2,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'rock',
        passing: 2,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'rock',
        passing: 2,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'rock',
        passing: 2,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'rock',
        passing: 2,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'rock',
        passing: 2,
        layers: [{ id: 0, up: false, position: false }],
      },
      {
        tile: 'rock',
        passing: 2,
        layers: [{ id: 0, up: false, position: false }],
      },
    ],
  ],
};
