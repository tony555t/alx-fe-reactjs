// function Footer() {
//     return (
//       <footer>
//         <p>© 2023 City Lovers</p>
//       </footer>
//     );
//   }
  
//   export default Footer;

function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#2c3e50', 
      color: 'white', 
      textAlign: 'center',
      padding: '25px',
      marginTop: '30px',
      fontSize: '14px',
      borderTop: '4px solid #3498db',
      boxShadow: '0 -2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <p style={{ 
          margin: '0',
          fontSize: '1rem',
          fontWeight: '300',
          letterSpacing: '0.5px'
        }}>
          © 2024 My Application. All rights reserved.
        </p>
        <p style={{
          margin: '10px 0 0 0',
          fontSize: '0.9rem',
          color: '#bdc3c7',
          fontStyle: 'italic'
        }}>
          Built with React & Enhanced Styling
        </p>
      </div>
    </footer>
  );
}

export default Footer;