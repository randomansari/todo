import React from 'react';
import './style.scss';

function User({users, setSelectedUser}) {
    return (
    <div>{
        <select className = 'select' onChange={setSelectedUser}>{
            users.map(({name, id}, index) => {
                return <option key = {index} value={id}>{name}</option>
            })
        }</select>
    }</div>
    );
  }

  export default User;