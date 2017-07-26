import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/application.scss';
import UserTable from './users/UserTable'



const users = [
    {
        'id': 1,
        'name': 'Pawel',
        'email': 'pawel4@test.pl',
        'year': 1986
    },
    {
        'id': 2,
        'name': 'Pawel2',
        'email': 'pawel6@test.pl',
        'year': 1986
    },
    {
        'id': 3,
        'name': 'Pawel3',
        'email': 'pawel1@test.pl',
        'year': 1986
    },
    {
        'id': 4,
        'name': 'Pawel4',
        'email': 'pawel3@test.pl',
        'year': 1986
    }
];


ReactDOM.render(<UserTable users={users}/>, document.getElementById('app'));