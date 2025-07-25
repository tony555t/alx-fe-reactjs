import React from 'react';

function Services() {
  const services = [
    {
      title: "Technology Consulting",
      description: "We provide expert advice on technology solutions to help your business stay competitive and efficient.",
      features: ["IT Strategy", "System Integration", "Digital Transformation", "Cloud Solutions"]
    },
    {
      title: "Market Analysis",
      description: "Comprehensive market research and analysis to help you make informed business decisions.",
      features: ["Market Research", "Competitor Analysis", "Consumer Insights", "Trend Forecasting"]
    },
    {
      title: "Product Development",
      description: "End-to-end product development services from concept to launch.",
      features: ["Product Design", "Prototyping", "Testing & Quality Assurance", "Launch Strategy"]
    }
  ];

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
          Our Services
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
          We offer a comprehensive range of professional services designed to help your business grow and succeed in today's competitive market.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '30px',
        marginBottom: '50px'
      }}>
        {services.map((service, index) => (
          <div 
            key={index}
            style={{
              backgroundColor: '#fff',
              padding: '40px 30px',
              borderRadius: '10px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <h3 style={{
              color: '#2c3e50',
              fontSize: '24px',
              marginBottom: '20px',
              fontWeight: 'bold'
            }}>
              {service.title}
            </h3>
            <p style={{
              color: '#7f8c8d',
              fontSize: '16px',
              lineHeight: '1.6',
              marginBottom: '25px'
            }}>
              {service.description}
            </p>
            <div style={{
              borderTop: '2px solid #ecf0f1',
              paddingTop: '20px'
            }}>
              <h4 style={{
                color: '#3498db',
                marginBottom: '15px',
                fontSize: '18px'
              }}>
                Key Features:
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    style={{
                      color: '#7f8c8d',
                      fontSize: '14px',
                      marginBottom: '8px',
                      position: 'relative',
                      paddingLeft: '20px'
                    }}
                  >
                    <span style={{
                      content: '•',
                      color: '#3498db',
                      position: 'absolute',
                      left: '0',
                      fontWeight: 'bold'
                    }}>•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '50px 40px',
        borderRadius: '10px',
        textAlign: 'center'
      }}>
        <h2 style={{
          color: '#2c3e50',
          fontSize: '32px',
          marginBottom: '20px'
        }}>
          Ready to Get Started?
        </h2>
        <p style={{
          color: '#7f8c8d',
          fontSize: '18px',
          marginBottom: '30px',
          maxWidth: '600px',
          margin: '0 auto 30px'
        }}>
          Contact us today to discuss how our services can help your business reach its full potential.
        </p>
        <button style={{
          backgroundColor: '#3498db',
          color: '#fff',
          padding: '15px 40px',
          fontSize: '18px',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
        onClick={() => window.location.href = '/contact'}
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
}

export default Services;