import { useState, useReducer } from 'react';
import { AppContext } from './context';

import UserList from './components/userList';
import AddUser from './components/addUser';

import './App.css';

const initState = ['Admin'];
const approvedUserReducer = (state, { type, payload }) => {
  switch(type) {
    case 'ADD_APPROVED_USER': return [...state, payload];
    case 'RESET_APPROVED_USERS': return [];
    default: return;
  }
};
  
const App = () => {
  const [ users, setUsers ] = useState(['Admin', 'NV', 'ASD']);
  const [approvedUsers, approvedUsersDispatch] = useReducer(approvedUserReducer, initState);

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
      <AppContext.Provider value={{ users, userEvents, approvedUsers, approvedUsersDispatch }}>
        <UserList />
        <AddUser />
      </AppContext.Provider>
    </div>
  );
}

export default App;