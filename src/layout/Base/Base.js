import PropTypes from 'prop-types';
import React from 'react';

import styles from './Base.module.scss';

function Base(props) {
  return(
    <div className={styles.base}>
      {props.children}
    </div>
  );
}

Base.propTypes = {
  children: PropTypes.array.isRequired
}

export default Base;
