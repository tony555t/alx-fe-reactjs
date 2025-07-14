import WelcomeMessage from './components/WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/counter';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <WelcomeMessage />
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <Footer />
      <Counter />
    </div>
  );
}

export default App;



// import React from 'react';
// import UserProfile from './components/UserProfile';


// function App() {
//   return (
//     <div>
//       <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
//     </div>
//   );
// }

// export default App;
