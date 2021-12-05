import { useContext } from 'react';
import { AppContext } from '../context';
import { useState } from 'react';

const AddUser = () => {
    const { userEvents } = useContext(AppContext);
    const [name, setName] = useState('');

    return (
        <div className="container">
            <input type="text" value={name} onChange={(event => setName(event.target.value))}/>
            <button onClick={e => userEvents('ADD_USER', { newUser: name })}> Add User </button>
        </div>
    );
};

export default AddUser;