// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  entity: any,
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

MetaPerson.propTypes = {
  entity: PropTypes.shape({}),
  handleAction: PropTypes.func,
};

MetaPerson.defaultProps = {
  entity: null,
  handleAction: () => {},
};

export default MetaPerson;
