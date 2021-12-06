import { useState, useReducer } from 'react';
import { AppContext } from './context';

import UserList from './components/userList';
import AddUser from './components/addUser';

import './App.css';

const App = () => {
  const initState = ['Admin'];
  const approvedUserReducer = (state, action) => {
    switch(action.type) {
      case 'ADD_APPROVED_USER': 
        return [...state, action.payload];
      case 'RESET_APPROVED_USERS': 
        return [];
      default: 
        return;
    }
  }
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
