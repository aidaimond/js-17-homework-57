import React from 'react';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  return (
    <div className="card mb-2">
      <div className="row no-gutters">
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text small">{user.mail}</p>
            <p className="card-text">{user.active}</p>
            <p className="card-text">{user.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;