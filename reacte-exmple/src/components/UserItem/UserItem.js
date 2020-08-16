import React, { Component } from 'react';
import styles from './UserItem.module.scss';

export default class UserItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      name,
      email,
      cell,
      picture: { medium: imgSrc },
    } = this.props;

    console.log(this.props);

    return (
      <div className={styles.userItemContainer}>
        <img className={styles.userAvatar} src={imgSrc} />
        <div>{`${name.first} ${name.last}`}</div>
      </div>
    );
  }
}
