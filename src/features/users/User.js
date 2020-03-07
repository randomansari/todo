import React from 'react';

function User({users}) {
    return (
    <div>{
        users.map(({name}, index) => {
            return <div key = {index}>{name}</div>
        })
    }</div>
    );
  }

  export default User;