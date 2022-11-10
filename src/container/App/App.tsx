import React from 'react';
import UserForm from "../../components/UserForm/UserForm";
import Users from "../../components/Users/Users";

function App() {
  return (
    <>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col">
            <UserForm/>
          </div>
          <div className="col">
            <Users/>
          </div>
        </div>
      </main>

    </>
  );
}

export default App;
