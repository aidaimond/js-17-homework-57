import React from 'react';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {

  const classNames = ['card mb-2 bg-opacity-50'];

  if (user.active) {
    classNames.push('bg-success');
  } else {
    classNames.push('bg-danger');
  }

  return (
    <div className={classNames.join(' ')}>
        <div className="col">
          <div className="card-body">
            <h5 className="card-title">User Name: {user.name}</h5>
            <p className="card-text">E-mail: {user.mail}</p>
            <p className="card-text">Role: {user.role}</p>
            <p className="card-text">Status: {user.active ? 'Online' : 'Offline'}</p>
          </div>
        </div>
    </div>
  );
};

export default UserItem;