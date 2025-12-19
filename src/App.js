import React from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';
import users from './data/users';

function App() {
  return (
    <div className="app">
      <h1>Team Members</h1>
      <div className="profile-container">
        {users.map(user => (
          <ProfileCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
