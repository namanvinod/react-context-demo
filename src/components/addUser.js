import { useContext } from 'react';
import { AppContext } from '../context';
import { useState } from 'react';

const AddUser = () => {
    const { userEvents, approvedUsersDispatch } = useContext(AppContext);
    const [name, setName] = useState('');

    return (
        <div className="container">
            <input type="text" value={name} onChange={(event => setName(event.target.value))}/>
            <button onClick={ _ => userEvents('ADD_USER', { newUser: name })}> Add User </button>
            <button onClick={ _ => approvedUsersDispatch({ type: 'RESET_APPROVED_USERS' })} > Reset Approved Users </button> 
        </div>
    );
};

export default AddUser;