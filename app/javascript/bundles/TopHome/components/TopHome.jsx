import PropTypes from 'prop-types';
import React from 'react';

const TopHome = ({ name, updateName }) => (
  <div>
    <h3>
      Hey, {name}!
    </h3>
    <hr />
    <form >
      <label htmlFor="name">
        Say hi to:
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => updateName(e.target.value)}
      />
    </form>
  </div>
);

TopHome.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
};

export default TopHome;
