import React from 'react';
import UserItem from "./UserItem";

interface Props {
  users: User[];
}

const Users: React.FC<Props> = ({users}) => {
  return (
    <div className="border border-2 border-secondary bg-white p-4 rounded">
      <h4 className="text-center">Users</h4>
      {users.map((user) => (
        <UserItem key={user.id} user={user}/>
      ))}
    </div>
  );
};

export default Users;