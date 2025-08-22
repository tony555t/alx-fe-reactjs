import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username required'),
  email: Yup.string().email('Invalid email').required('Email required'),
  password: Yup.string().min(6, 'Minimum 6 characters').required('Password required'),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Formik form submitted:', values);
      }}
    >
      <Form style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        
        <Field name="username" placeholder="Username" />
        <ErrorMessage name="username" component="div" style={{ color: 'red' }} />

        <Field name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />

        <Field name="password" type="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" style={{ color: 'red' }} />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
