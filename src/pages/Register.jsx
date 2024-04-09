import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Register = () => {
  return (
    <Formik 
    initialValues={{fname:'',lname:'',email:'',password:'',cpassword:''}}
    validationSchema={Yup.object({
      fname: Yup.string().required('first name is required')
      .max(15,'first name must be less than  15 character'),
      

      lname: Yup.string().required('last name is required')
      .max(15,'last name must be less than  15 character'),

      email: Yup.string().required('Email is mandatory')
      .email('invalid email format'),

      password: Yup.string().required('password cannot be empty')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#?_!])[a-zA-Z0-9@#$!]{8,50}$/,'password must be at least 8 characters, a number and a special character'),

      cpassword:Yup.string()
      .required('confirm pass is mandatory')
      .oneOf([Yup.ref('password')],'password and confrim password didnt match')

    })}

    >
      <div className="container">
        <div className="row d-flex justify-content-center">
       <div className="col-md-5">
        <Form className='shadow p-3'>
          <h2 className='text-center' >Register Form</h2>
          <div className="md-2">
            <label htmlFor="fname"> First Name</label>
            <Field type="text" name='fname' id='fname' className='form-control'/>
            <ErrorMessage name='fname'>
              {msg => <div style={{color:'red'}}> {msg}</div>}
            </ErrorMessage>
          </div>
          <div className="md-2">
            <label htmlFor="fname"> Last Name</label>
            <Field type="text" name='lname' id='lname' className='form-control'/>
            <ErrorMessage name='lname'>{msg => <div style={{color:'red'}}> {msg}</div>}</ErrorMessage>
          </div>
          <div className="md-2">
            <label htmlFor="email"> Email </label>
            <Field type="text" name='email' id='email' className='form-control'/>
            <ErrorMessage name='email'>{msg => <div style={{color:'red'}}> {msg}</div>}</ErrorMessage>
          </div>
          <div className="md-2">
            <label htmlFor="password"> password </label>
            <Field type="text" name='password' id='password' className='form-control'/>
            <ErrorMessage name='password'>{msg => <div style={{color:'red'}}> {msg}</div>}</ErrorMessage>
          </div>
          <div className="md-2">
            <label htmlFor="password"> Confirm Password </label>
            <Field type="text" name='password' id='password' className='form-control'/>
            <ErrorMessage name='password'>{msg => <div style={{color:'red'}}> {msg}</div>}</ErrorMessage>
          </div>
          <div className='mb-3'>
            <button type='submit' className='btn btn-primary'>Register</button>
          </div>
        </Form>
       </div>
        </div>
      </div>
    </Formik>
  )
} 
export default Register
