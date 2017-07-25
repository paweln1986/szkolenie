import React from 'react';

const UserRow = ({user:{id,name,email,year="Undefined"},onClick}) => (<tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{email}</td>
    <td>{year}</td>
    <td><button className="btn btn-danger" onClick={()=>onClick(id)}>Delete</button></td>
</tr>);
export default UserRow;
