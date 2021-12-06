import { useContext } from 'react';
import { AppContext } from '../context';

import User from './user';

const UserList = () => {
    const { users, approvedUsers, approvedUsersDispatch } = useContext(AppContext);

    const approveUser = user => approvedUsersDispatch({ type: 'ADD_APPROVED_USER', payload: user });
    
    return (
        <div className="container">
            {
                users.map((user, idx) => <User 
                                            key={idx} 
                                            userId={idx}
                                            userName={user}
                                            approved={approvedUsers.includes(user)}
                                            approveUser={approveUser.bind({}, user)}
                                        />
                )
            }        
        </div>
    );
};

export default UserList;