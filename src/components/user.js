const User = ({userId, userName, approved, approveUser}) => {
    return (
        <div>
            <ul>{userId} - {userName}: {approved ? ' Approved' : <input type="checkbox" onClick={ _ => (approveUser())} />}</ul>
        </div>
    );
};

export default User;