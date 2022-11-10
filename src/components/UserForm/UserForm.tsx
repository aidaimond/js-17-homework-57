import React, {useState} from 'react';

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {

  const [user, setUser] = useState<UserMutation>({
    name: '',
    mail: '',
    active: false,
    role: '',
  });

  const onUserChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setUser(prev => ({...prev, [name]: value}));
  };

  const onFormChange = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...user,
    })
    console.log(user);
  };

  return (
    <form onSubmit={onFormChange}>
      <h4>Create a new user</h4>
      <div className="mb-3">
        <label htmlFor="name">Name</label>
        <input
          id="name" name="name" type="text" className="form-control"
          value={user.name} onChange={onUserChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="mail">E-mail</label>
        <input
          id="mail" name="mail" type="email" className="form-control"
          value={user.mail} onChange={onUserChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="active">Active</label>
        <input
          name="active" type="checkbox" className="ms-2"
          checked={user.active}
          onChange={(e) => {
            setUser(prev => ({...prev, active: e.target.checked}));
          }}
        />
      </div>
      <div className="mb-3">
        <label>
          <select
            name="role"
            required
            value={user.role} onChange={onUserChange}
          >
            <option disabled value="">Select a role</option>
            <option>User</option>
            <option>Editor</option>
            <option>Admin</option>
          </select>
        </label>
      </div>
      <button type="submit" className="btn btn-secondary">Sign Up</button>
    </form>
  );
};

export default UserForm;