import {React, useState} from 'react';
import AddUser from './components/users/AddUser';
import UsersList from './components/users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  function AddUserHandler(user) {
    const userData = {
      ...user, id: Math.random().toString()
    };
    setUsersList(prevState => {
      return [...prevState, userData];
    });
  }

  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
