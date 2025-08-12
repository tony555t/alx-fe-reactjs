// function MainContent() {
//     return (
//       <main>
//         <p>I love to visit New York, Paris, and Tokyo.</p>
//       </main>
//     );
//   }
  
//   export default MainContent;

function MainContent() {
  return (
    <main style={{ 
      padding: '30px', 
      backgroundColor: '#f5f5f5', 
      minHeight: '500px',
      fontSize: '16px',
      lineHeight: '1.8',
      borderRadius: '8px',
      margin: '20px',
      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        color: '#2c3e50',
        marginBottom: '20px',
        fontSize: '2rem',
        textAlign: 'center',
        borderBottom: '3px solid #3498db',
        paddingBottom: '10px',
        display: 'inline-block',
        width: '100%'
      }}>
        Welcome to My Application
      </h2>
      
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '6px',
        marginBottom: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <p style={{ 
          color: '#34495e', 
          marginBottom: '15px',
          fontSize: '1.1rem'
        }}>
          This is the main content area where you can add your application content.
        </p>
      </div>

      <div style={{
        backgroundColor: '#e8f4fd',
        padding: '20px',
        borderRadius: '6px',
        borderLeft: '4px solid #3498db'
      }}>
        <p style={{ 
          color: '#2980b9', 
          fontStyle: 'italic',
          fontSize: '1.1rem',
          margin: '0'
        }}>
          🌍 I love to visit New York, Paris, and Tokyo.
        </p>
      </div>
    </main>
  );
}

export default MainContent;