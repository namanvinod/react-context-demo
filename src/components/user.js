const User = ({userId, userName}) => {
    return (
        <div>
            <ul>{userId} - {userName}</ul>
        </div>
    );
};

export default User;