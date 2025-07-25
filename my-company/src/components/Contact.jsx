import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    alert('Form submitted successfully!');
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 2000);
  };

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
          Contact Us
        </h1>
        <div style={{
          width: '80px',
          height: '4px',
          backgroundColor: '#3498db',
          margin: '0 auto',
          marginBottom: '20px'
        }}></div>
        <p style={{
          fontSize: '18px',
          color: '#7f8c8d',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '50px',
        alignItems: 'start'
      }}>
        {/* Contact Form */}
        <div style={{
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            color: '#2c3e50',
            marginBottom: '30px',
            fontSize: '28px'
          }}>
            Send us a Message
          </h2>
          
          {isSubmitted && (
            <div style={{
              backgroundColor: '#d4edda',
              color: '#155724',
              padding: '15px',
              borderRadius: '5px',
              marginBottom: '20px',
              border: '1px solid #c3e6cb'
            }}>
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#2c3e50',
                fontWeight: 'bold'
              }}>
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '15px',
                  fontSize: '16px',
                  border: '2px solid #ecf0f1',
                  borderRadius: '8px',
                  transition: 'border-color 0.3s ease',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#ecf0f1'}
              />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#2c3e50',
                fontWeight: 'bold'
              }}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '15px',
                  fontSize: '16px',
                  border: '2px solid #ecf0f1',
                  borderRadius: '8px',
                  transition: 'border-color 0.3s ease',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#ecf0f1'}
              />
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#2c3e50',
                fontWeight: 'bold'
              }}>
                Message *
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your project or inquiry..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                style={{
                  width: '100%',
                  padding: '15px',
                  fontSize: '16px',
                  border: '2px solid #ecf0f1',
                  borderRadius: '8px',
                  transition: 'border-color 0.3s ease',
                  outline: 'none',
                  resize: 'vertical',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#ecf0f1'}
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitted}
              style={{
                backgroundColor: isSubmitted ? '#95a5a6' : '#3498db',
                color: '#fff',
                padding: '15px 40px',
                fontSize: '18px',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '50px',
                cursor: isSubmitted ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.3s ease',
                width: '100%'
              }}
              onMouseOver={(e) => {
                if (!isSubmitted) {
                  e.target.style.backgroundColor = '#2980b9';
                }
              }}
              onMouseOut={(e) => {
                if (!isSubmitted) {
                  e.target.style.backgroundColor = '#3498db';
                }
              }}
            >
              {isSubmitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <div style={{
            backgroundColor: '#2c3e50',
            color: '#fff',
            padding: '40px',
            borderRadius: '10px',
            marginBottom: '30px'
          }}>
            <h2 style={{
              marginBottom: '30px',
              fontSize: '28px'
            }}>
              Get in Touch
            </h2>
            
            <div style={{ marginBottom: '25px' }}>
              <h4 style={{ 
                color: '#3498db',
                marginBottom: '10px',
                fontSize: '18px'
              }}>
                📍 Address
              </h4>
              <p style={{ color: '#bdc3c7', lineHeight: '1.5' }}>
                123 Business Street<br />
                Suite 100<br />
                City, State 12345
              </p>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <h4 style={{ 
                color: '#3498db',
                marginBottom: '10px',
                fontSize: '18px'
              }}>
                📞 Phone
              </h4>
              <p style={{ color: '#bdc3c7' }}>
                +1 (555) 123-4567
              </p>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <h4 style={{ 
                color: '#3498db',
                marginBottom: '10px',
                fontSize: '18px'
              }}>
                ✉️ Email
              </h4>
              <p style={{ color: '#bdc3c7' }}>
                info@mycompany.com
              </p>
            </div>

            <div>
              <h4 style={{ 
                color: '#3498db',
                marginBottom: '10px',
                fontSize: '18px'
              }}>
                🕒 Business Hours
              </h4>
              <p style={{ color: '#bdc3c7', lineHeight: '1.5' }}>
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '30px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <h3 style={{
              color: '#2c3e50',
              marginBottom: '15px',
              fontSize: '24px'
            }}>
              Need Immediate Help?
            </h3>
            <p style={{
              color: '#7f8c8d',
              marginBottom: '20px',
              lineHeight: '1.5'
            }}>
              For urgent matters, please call us directly or send an email. We typically respond within 24 hours.
            </p>
            <button style={{
              backgroundColor: '#e74c3c',
              color: '#fff',
              padding: '12px 30px',
              fontSize: '16px',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
            onClick={() => window.open('tel:+15551234567')}
            >
              Call Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;