import React from 'react';


const SortedColumn = ({isClicked, direction}) => (
    <span>
        <span className={direction === 'asc' ? 'dropup':'dropdown'}><span className={isClicked ? 'caret' : ''}/></span>
    </span>
);

const UserTableHeader = ({ordering: {col, direction}, onClick}) => (<tr>
    <td onClick={() => onClick("id")}>
        <SortedColumn direction={direction} isClicked={col==="id"}/> Id
    </td>
    <td onClick={() => onClick("name")}><SortedColumn direction={direction} isClicked={col==="name"}/> Name</td>
    <td onClick={() => onClick("email")}><SortedColumn direction={direction} isClicked={col==="email"}/> Email</td>
    <td onClick={() => onClick("year")}><SortedColumn direction={direction} isClicked={col==="year"}/> Year</td>
    <td>Action</td>
</tr>);
export default UserTableHeader;
