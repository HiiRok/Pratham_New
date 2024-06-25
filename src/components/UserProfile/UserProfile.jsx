import React from 'react';
import userStyle from './UserProfile.module.css';
import { AuthContext } from '../../AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

const UserProfile = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    profilePicture: 'https://via.placeholder.com/150',
    coursesPurchased: 5,
  };

  const handleLogout = () => {
    logout();
  };

  const handlePasswordChange = () => {
    navigate("/reset-password");
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