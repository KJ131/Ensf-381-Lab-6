import Controls from './Controls';
import sampleUsers from './sampleUsers';
import UserList from './UserList';
import React, { useState, useEffect } from 'react';

function UserDirectoryPage() {
  // TODO: add users, sortBy, and viewMode state in this component.
  const [users, setUsers] = useState ([]);
  const [sortBy, setSortBy] = useState ('id');
  const [viewMode, setViewMode] = useState ('grid');
  // TODO: fetch the initial users with useEffect.

  useEffect(()=> {
    setUsers(sampleUsers);
  }, []);

  function handleDeleteClick(userId) {
    try{
      let response = fetch(`https://69a1e3c02e82ee536fa27de4.mockapi.io/user_api/${userId}`, {
        method: 'DELETE'
      });
      if(response.ok){
        const filteredList = users.filter(user => user.id != userId);
        setUsers(filteredList);
      }
    } catch(error){
      console.log(error);
    }
  }
  function handleSortByGroupClick() {
    const sortedUsers = users.sort((a, b) => a.group - b.group);
    setUsers(sortedUsers);
    setSortBy("group");
  }
  function handleSortByIdClick() {
    const sortedUsers = users.sort((a, b) => a.userId - b.userId);
    setUsers(sortedUsers);
    setSortBy("id");
  }
  function handleViewToggleClick() {
    if(viewMode.toLowerCase() == "grid"){
      setViewMode("list");
    }
    else{
      setViewMode("grid");
    }
  }
  return (
    <>
      <section className="panel">
        <h1>User Directory</h1>
      </section>

      <section className="panel">
        <h2>Controls</h2>
        <Controls onDeleteClick={handleDeleteClick} onSortByGroupClick={handleSortByGroupClick}
         onSortByIdClick={handleSortByIdClick} onViewToggleClick={handleViewToggleClick}/>
      </section>
      <section className="panel">
        <h2>All Users</h2>
        <UserList users={users} viewMode={viewMode} />
      </section>
    </>
  );
}
export default UserDirectoryPage;