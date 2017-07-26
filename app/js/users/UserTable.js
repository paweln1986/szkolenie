import React from 'react';
import UserRow from './UserRow';
import UserTableHeader from './UserTableHeader';

export default class UserTable extends React.Component {
    constructor({users}) {
        super();
        this.state = {
            ordering: {
                col: 'name',
                direction: 'asc'
            },
            users: [...users]
        };
    }

    addNewUser() {
        let user = this.state.users.sort((a, b) => a.id - b.id)[this.state.users.length - 1];
        const id = user === undefined ? 0 : user.id;
        this.setState({
            users: [...this.state.users, {
                id: id + 1,
                'name': 'Pawel4',
                'email': `pawel_test${id}@test.pl`,
                'year': new Date().getFullYear()
            }]
        })
    }

    changeOrdering(column) {
        this.setState({
            ordering: {
                col: column,
                direction: this.state.ordering.direction === 'asc' ? 'desc' : 'asc'
            }
        })
    }

    removeUser(id) {
        this.setState({users: [...this.state.users.filter(e => e.id !== id)]})
    }

    static _compare(user1, user2, col) {
        if (user1[col] < user2[col]) {
            return -1;
        }
        if (user1[col] > user2[col]) {
            return 1;
        }
        return 1;

    }

    orderUsers = (user1, user2) => {
        if (this.state.ordering.direction === 'asc')
            return UserTable._compare(user1, user2, this.state.ordering.col);
        else return UserTable._compare(user2, user1, this.state.ordering.col);
    };

    render() {
        const userList = this.state.users.sort(this.orderUsers).map((user, i) => (
            <UserRow key={i} user={user} onClick={this.removeUser.bind(this)}/>));

        return <div>
            <table className="table table-striped table-bordered table-hover table-condensed">
                <thead>
                <UserTableHeader ordering={this.state.ordering} onClick={(col) => this.changeOrdering(col)}/>
                </thead>
                <tbody>
                {userList}
                </tbody>
            </table>
            <button onClick={this.addNewUser.bind(this)} className="btn btn-primary">Add new user</button>
        </div>
    }

}