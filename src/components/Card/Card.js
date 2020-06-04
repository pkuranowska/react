import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  }

  render() {
    const {title} = this.props;
    return (
      <h3 className={styles.component}>{title}</h3>
    );
  }
}
export default Card;