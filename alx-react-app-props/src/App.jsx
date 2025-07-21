import React from 'react';
import { BrowserRouter as  Router,Routes ,Route} from "react-router-dom";

import UserContext from './components/UserContext';
import ProfilePage from './components/ProfilePage';

import Home from '../../my-company/Home';
import About from '../../my-company/About';
import Service from '../../my-company/Services';
import Contact from '../../my-company/Contact';






function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile " element={<ProfilePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        

      </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;