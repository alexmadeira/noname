export const Evento1 = () => {
  alert('voce chegou aqui');
};
export const Luta = () => {
  alert('Luta');
};

export const Fim = {
  type: 'teleport',
  data: {
    y: 2,
    x: 1,
    facing: 'DOWN',
    map: 'cidade1',
  },
};
