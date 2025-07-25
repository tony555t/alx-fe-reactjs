import React from 'react';

function Home() {
  return (
    <div style={{ 
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '60px 40px',
        borderRadius: '10px',
        marginBottom: '40px'
      }}>
        <h1 style={{ 
          fontSize: '48px',
          color: '#2c3e50',
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          Welcome to Our Company
        </h1>
        <p style={{ 
          fontSize: '20px',
          color: '#7f8c8d',
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          We are dedicated to delivering excellence in all our services and building lasting relationships with our clients.
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        marginTop: '40px'
      }}>
        <div style={{
          padding: '30px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>Quality Service</h3>
          <p style={{ color: '#7f8c8d', lineHeight: '1.5' }}>
            We provide high-quality services that exceed our clients' expectations.
          </p>
        </div>
        
        <div style={{
          padding: '30px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>Expert Team</h3>
          <p style={{ color: '#7f8c8d', lineHeight: '1.5' }}>
            Our experienced professionals are committed to delivering the best results.
          </p>
        </div>
        
        <div style={{
          padding: '30px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>Customer Focus</h3>
          <p style={{ color: '#7f8c8d', lineHeight: '1.5' }}>
            We put our customers first and tailor our solutions to meet their needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;