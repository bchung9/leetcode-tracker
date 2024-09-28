import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { logOut } from '../firebase';

const Navbar = ({ openLoginModal, openRegisterModal }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await logOut();
      alert('Logged out successfully!');
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>LeetCode Problem Tracker</h1>
      <div style={styles.navItems}>
        {user ? (
          <button style={styles.button} onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <button style={styles.button} onClick={openLoginModal}>
              Login
            </button>
            <button style={styles.button} onClick={openRegisterModal}>
              Register
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  title: {
    margin: 0,
    fontSize: '24px', 
  },
  navItems: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#444',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '10px',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
};

export default Navbar;
