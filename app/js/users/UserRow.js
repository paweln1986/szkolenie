import React from 'react';

const Cell = ({value}) => (<td>{value}</td>);

const ActionButton = ({onClick, actionName}) => (<button className="btn btn-danger" onClick={onClick}>{actionName}</button>);

const UserRow = ({user: {id, name, email, year = "Undefined"}, onClick}) => (
    <tr>
        <Cell value={id}/>
        <Cell value={name}/>
        <Cell value={email}/>
        <Cell value={year}/>
        <td><ActionButton onClick={() => onClick(id)} actionName="Delete"/></td>
    </tr>);
export default UserRow;
