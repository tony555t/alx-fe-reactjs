import React from 'react';

function About() {
  return (
    <div style={{ 
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '50px'
      }}>
        <h1 style={{ 
          fontSize: '42px',
          color: '#2c3e50',
          marginBottom: '20px'
        }}>
          About Us
        </h1>
        <div style={{
          width: '80px',
          height: '4px',
          backgroundColor: '#3498db',
          margin: '0 auto'
        }}></div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '50px',
        alignItems: 'center',
        marginBottom: '50px'
      }}>
        <div>
          <h2 style={{ 
            color: '#2c3e50',
            marginBottom: '20px',
            fontSize: '28px'
          }}>
            Our Story
          </h2>
          <p style={{ 
            fontSize: '16px',
            color: '#7f8c8d',
            lineHeight: '1.8',
            marginBottom: '20px'
          }}>
            Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.
          </p>
          <p style={{ 
            fontSize: '16px',
            color: '#7f8c8d',
            lineHeight: '1.8'
          }}>
            Over the years, we have built a reputation for excellence and innovation, helping businesses of all sizes achieve their goals through our comprehensive range of services.
          </p>
        </div>
        
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '40px',
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            color: '#2c3e50',
            marginBottom: '30px',
            fontSize: '24px'
          }}>
            Our Values
          </h3>
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ color: '#3498db', marginBottom: '10px' }}>Innovation</h4>
            <p style={{ color: '#7f8c8d', fontSize: '14px' }}>We embrace new technologies and creative solutions</p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ color: '#3498db', marginBottom: '10px' }}>Integrity</h4>
            <p style={{ color: '#7f8c8d', fontSize: '14px' }}>We conduct business with honesty and transparency</p>
          </div>
          <div>
            <h4 style={{ color: '#3498db', marginBottom: '10px' }}>Excellence</h4>
            <p style={{ color: '#7f8c8d', fontSize: '14px' }}>We strive for the highest quality in everything we do</p>
          </div>
        </div>
      </div>

      <div style={{
        backgroundColor: '#2c3e50',
        color: '#fff',
        padding: '40px',
        borderRadius: '10px',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '20px', fontSize: '28px' }}>Why Choose Us?</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px',
          marginTop: '30px'
        }}>
          <div>
            <h3 style={{ color: '#3498db', fontSize: '36px', marginBottom: '10px' }}>30+</h3>
            <p>Years of Experience</p>
          </div>
          <div>
            <h3 style={{ color: '#3498db', fontSize: '36px', marginBottom: '10px' }}>500+</h3>
            <p>Satisfied Clients</p>
          </div>
          <div>
            <h3 style={{ color: '#3498db', fontSize: '36px', marginBottom: '10px' }}>100+</h3>
            <p>Successful Projects</p>
          </div>
          <div>
            <h3 style={{ color: '#3498db', fontSize: '36px', marginBottom: '10px' }}>24/7</h3>
            <p>Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;