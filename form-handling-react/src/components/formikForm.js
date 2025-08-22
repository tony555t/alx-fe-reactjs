// src/components/FormikForm.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required')
});

const FormikForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    alert('Registration successful with Formik!');
    console.log('Form submitted:', values);
    resetForm();
  };

  return (
    <div>
      <h2>User Registration (Formik)</h2>
      
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Username:</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="p" style={{color: 'red'}} />
          </div>

          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="p" style={{color: 'red'}} />
          </div>

          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="p" style={{color: 'red'}} />
          </div>

          <button type="submit">Register with Formik</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;