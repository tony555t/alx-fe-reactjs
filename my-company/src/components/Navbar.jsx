import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        padding: '15px 20px',
        backgroundColor: '#2c3e50',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#fff'
        }}>
          My Company
        </div>
        <div style={{
          display: 'flex',
          gap: '30px'
        }}>
          <Link 
            to="/" 
            style={{ 
              color: '#fff',
              textDecoration: 'none',
              fontSize: '16px',
              padding: '8px 16px',
              borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            style={{ 
              color: '#fff',
              textDecoration: 'none',
              fontSize: '16px',
              padding: '8px 16px',
              borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            About
          </Link>
          <Link 
            to="/services" 
            style={{ 
              color: '#fff',
              textDecoration: 'none',
              fontSize: '16px',
              padding: '8px 16px',
              borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            style={{ 
              color: '#fff',
              textDecoration: 'none',
              fontSize: '16px',
              padding: '8px 16px',
              borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;