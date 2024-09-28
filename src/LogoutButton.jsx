import React from 'react';
import { logOut } from './firebase';

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await logOut();
      alert("Logged out successfully!");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <button onClick={handleLogout}>Log Out</button>
  );
};

export default LogoutButton;
