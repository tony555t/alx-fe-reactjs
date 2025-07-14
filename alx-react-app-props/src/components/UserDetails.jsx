import React ,{ useContext} from 'react';
import UserContext from '../UserContext';

function UserDetails() {
const userData = useContext=(UserContext);
    
    return (
      <div style={{
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        maxWidth: '400px',
        margin: '20px auto'
      }}>
        <h3>user Details</h3>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>

     
      </div>
    );
  }
  
  export default UserDetails;