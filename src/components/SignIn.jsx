import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

const SignIn = () => {
  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-2'>Sign in to your account</h1>
      <p className='py-2'>
        Don't have an account yet?{' '}
        <Link to='/signup' className='underline'>
          Sign up.
        </Link>
      </p>
      <Form title='Sign in' />
    </div>
  );
};

export default SignIn;
