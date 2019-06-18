import React from 'react';
import PropTypes from 'prop-types';

function MetaPerson({ entity, handleAction }) {
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
