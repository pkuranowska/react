import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';
//import ReactHtmlParser from 'react-html-parser';

const Container = props => (
  <div className={styles.component}>{props.children}</div>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;