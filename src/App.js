import { useState } from 'react';
import { AppContext } from './context';

import UserList from './components/userList';
import AddUser from './components/addUser';

import './App.css';

const App = () => {
  const [ users, setUsers ] = useState(['NV', 'ASD']);

  const userEvents = (action, payload) => {
    switch(action) {
      case 'ADD_USER': {
        setUsers([...users, payload.newUser ]);
        return;
      }
      default: return;
    }
  };

  return (
    <div className="App">
      <AppContext.Provider value={{ users, userEvents }}>
        <UserList />
        <AddUser />
      </AppContext.Provider>
    </div>
  );
}

export default App;
