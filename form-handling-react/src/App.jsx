// src/App.jsx
import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  const [currentForm, setCurrentForm] = useState('controlled');

  return (
    <div>
      <h1>Form Handling in React</h1>
      
      <div>
        <button onClick={() => setCurrentForm('controlled')}>
          Controlled Components
        </button>
        <button onClick={() => setCurrentForm('formik')}>
          Formik
        </button>
      </div>

      {currentForm === 'controlled' ? <RegistrationForm /> : <FormikForm />}
    </div>
  );
}

export default App;