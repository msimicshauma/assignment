import React from 'react';

const Users = ({ users }) => {

  const userList = users.map(user => {
    return(
      <div className="card" key={user._id}>
        <p className="card-text">
          <span className="property">Name: </span>
          {user.firstName + ' ' + user.surname}
        </p>
        <p className="card-text">
          <span className="property">Age: </span>
          {user.age}
        </p>
        <p className="card-text">
          <span className="property">Gender: </span>
          {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
        </p>
      </div>
    );
  });

  return(
    <div className="users">{userList}</div>
  );
}

export default Users;
