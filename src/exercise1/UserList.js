import UserCard from './UserCard';

function UserList({ users, viewMode }) {
  let className;
  if (!users.length) {
    return <p>No users found.</p>;
  }
  if(viewMode.toLowerCase() == "grid"){
    className = "user-grid";
  } else{
    className = "user-list";
  }

  return (
    <div
      // use viewMode to switch between the `user-grid` and `user-list` classes. 
      // When viewMode is "grid", the class should be "user-grid". 
      // When viewMode is "list", the class should be "user-list".
      className= {className}
    >
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;