import React, {Component} from 'react';
import {getData} from "../../api"
import styles from './UserList.module.scss'
import Spinner from "../Spinner/Spinner";

class UserList extends Component {
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
        })

        const newUsers = await getData();

        this.setState({
            users: [...this.state.users, ...newUsers],
            isFetching: false,
        });
        console.log(this.state);

    }

    render() {
        return (
            <div className={styles.container}>
                {
                    this.state.isFetching && <Spinner />
                }
                <div onClick={this.fetchUsers}>LOAD</div>
            </div>
        );
    }
}

export default UserList;