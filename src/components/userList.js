import { useContext } from 'react';
import { AppContext } from '../context';

import User from './user';

const UserList = () => {
    const { users } = useContext(AppContext);

    return (
        <div className="container">
            {
                users.map((user, idx) => <User 
                                            key={idx} 
                                            userId={idx}
                                            userName={user} 
                                        />
                )
            }        
        </div>
    );
};

export default UserList;