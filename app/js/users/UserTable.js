import React from 'react';
import UserRow from './UserRow'
import UserTableHeader from './UserTableHeader'

export default class UserTable extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [
                {   'id': 1,
                    'name': 'Pawel',
                    'email': 'pawel@test.pl',
                    'year': 1986
                },
                {
                    'id': 2,
                    'name': 'Pawel2',
                    'email': 'pawel@test.pl',
                    'year': 1986
                },
                {
                    'id': 3,
                    'name': 'Pawel3',
                    'email': 'pawel@test.pl',
                    'year': 1986
                },
                {
                    'id': 4,
                    'name': 'Pawel4',
                    'email': 'pawel@test.pl',
                    'year': 1986
                }
            ]
        };
    }

    addNewUser(){
        let user = this.state.users[this.state.users.length-1];
        const id = user===undefined? 0 : user.id;
        this.setState({users:[...this.state.users, {
            id: id+1,
            'name': 'Pawel4',
            'email': 'pawel@test.pl',
            'year': new Date().toJSON()
        }]})
    }

    removeUser(id){
        this.setState({users:[...this.state.users.filter(e=>e.id!==id)]})
    }

    render() {
        const userList = this.state.users.sort((a,b)=>a.id-b.id)
            .map((user, i) => (<UserRow key={i} user={user} onClick={this.removeUser.bind(this)}/>));

        return <div>
            <table className="table table-striped table-bordered table-hover table-condensed">
                <thead>
                <UserTableHeader/>
                </thead>
                <tbody>
                {userList}
                </tbody>
            </table>
            <button onClick={()=>this.addNewUser()} className="btn btn-primary">Add new user</button>
        </div>
    }
}