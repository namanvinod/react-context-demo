import { useContext } from 'react';
import { AppContext } from '../context';
import { useState } from 'react';

const AddUser = () => {
    const { userEvents, approvedUsersDispatch } = useContext(AppContext);
    const [newUser, setNewUser] = useState('');
    
    const addNewUser = () => {
        if(!newUser) return;
        userEvents('ADD_USER', { newUser });
        setNewUser('');
    }

    return (
        <div className="container">
            <input type="text" value={newUser} onChange={(event => setNewUser(event.target.value))}/>
            <button onClick={ _ => addNewUser()}> Add New User </button>
            <button onClick={ _ => approvedUsersDispatch({ type: 'RESET_APPROVED_USERS' })} > Reset Approved Users </button> 
        </div>
    );
};

export default AddUser;