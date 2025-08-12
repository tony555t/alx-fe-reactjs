import React, { useContext } from 'react';
import UserContext from '../UserContext'; // adjust path if necessary

const UserProfile = () => {
  const user = useContext(UserContext); // Access context value

  return (
    <div style={{ 
      border: '1px solid gray', 
      padding: '20px', 
      margin: '20px',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>
      <h2 style={{ 
        color: 'blue',
        fontSize: '1.8rem',
        marginBottom: '15px',
        textAlign: 'center',
        borderBottom: '2px solid #e0e0e0',
        paddingBottom: '10px'
      }}>
        {user.name}
      </h2>
      <p style={{
        fontSize: '1.1rem',
        marginBottom: '10px',
        color: '#333'
      }}>
        Age: <span style={{ 
          fontWeight: 'bold',
          color: '#007bff',
          fontSize: '1.2rem'
        }}>
          {user.age}
        </span>
      </p>
      <p style={{
        fontSize: '1rem',
        color: '#666',
        lineHeight: '1.6',
        fontStyle: 'italic',
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #e0e0e0'
      }}>
        Bio: {user.bio}
      </p>
    </div>
  );
};

export default UserProfile;
