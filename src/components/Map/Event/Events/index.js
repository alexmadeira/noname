import React, { memo } from 'react';

import Teleport from './Teleport';

function Events({ type, data }) {
  switch (type) {
    case 'teleport':
      return <Teleport data={data} />;
    default:
  }
}

export default memo(Events);
