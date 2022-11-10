import React from 'react';

const UserForm = () => {
  return (
    <form>
      <h4>Create a new user</h4>
      <div className="mb-3">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" className="form-control"/>
      </div>
      <div className="mb-3">
        <label htmlFor="mail">E-mail</label>
        <input id="mail" name="mail" type="email" className="form-control"/>
      </div>
      <div className="mb-3">
        <label htmlFor="active">Active</label>
        <input
          name="active" type="checkbox"
          className="ms-2"
        />
      </div>
      <div className="mb-3">
        <label>
          <select
            name="role"
            required>
            <option disabled value="">Select a role</option>
            <option>User</option>
            <option>Editor</option>
            <option>Admin</option>
          </select>
        </label>
      </div>
      <button type="submit" className="btn btn-secondary">Create new user</button>
    </form>
  );
};

export default UserForm;