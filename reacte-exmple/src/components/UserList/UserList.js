import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';
import UserItem from '../UserItem/UserItem';
import { getData } from '../../api';
import styles from './UserList.module.scss';

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isFetching: true,
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    this.setState({
      isFetching: true,
    });

    const newUsers = await getData();

    this.setState({
      users: [...this.state.users, ...newUsers],
      isFetching: false,
    });

    console.log(this.state);
  };

  mapUsers = () => {
    return this.state.users.map((user) => (
      <UserItem {...user} key={user.cell} />
    ));
  };

  render() {
    const { users, isFetching } = this.state;
    return (
      <div className={styles.container}>
        {isFetching && <Spinner />}
        {users.length > 0 && this.mapUsers()}
        <div onClick={this.fetchUsers}>LOAD</div>
      </div>
    );
  }
}
