// @flow

import React from 'react';
import Hero from '../../utils/hero';
import Villain from '../../utils/villain';

type Props = {
  entity: Hero | Villain,
  handleAction: () => void,
}

function MetaPerson({ entity, handleAction }: Props) {
  return (
    <div>
      <div>{entity.greet()}</div>
      <div>
        Health:
        {entity.health}
      </div>
      <button
        type="button"
        disabled={entity.isDead}
        onClick={handleAction}
      >
        Attack
      </button>
    </div>
  );
}

export default MetaPerson;
