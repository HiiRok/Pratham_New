import React from 'react';
import userStyle from './UserProfile.module.css';

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    profilePicture: 'https://via.placeholder.com/150',
    coursesPurchased: 5,
  };

  const handleLogout = () => {
    // Perform logout logic here
  };

  const handlePasswordChange = () => {
    // Perform password change logic here
  };

  return (
    <div className={userStyle.cardContainer}>
      <div className={userStyle.card}>
        <div className={userStyle.profilePicture}>
          <img src={user.profilePicture} alt="Profile" />
        </div>
        <div className={userStyle.profileInfo}>
          <h2 className={userStyle.username}>{user.name}</h2>
          <p className={userStyle.email}>{user.email}</p>
          <p className={userStyle.courses}>Courses Purchased: {user.coursesPurchased}</p>
          <div className={userStyle.actions}>
            <button className={userStyle.passwordChange} onClick={handlePasswordChange}>
              Change Password
            </button>
            <button className={userStyle.logout} onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;