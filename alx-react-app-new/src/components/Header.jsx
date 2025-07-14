function Header() {
    return (
      <header style={{
        background:'navy',
        color:'white',
        textAlign:'center',
        padding:'20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          marginBottom: '20px'

      }}>
        <h1 style ={{
             margin: '0',
             fontSize: '2.5rem',
             fontWeight: 'bold',
             letterSpacing: '1px'
        }}>My Favorite Cities</h1>
      </header>
    );
  }
  
  export default Header;