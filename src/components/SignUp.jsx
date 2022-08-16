import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

const SignUp = () => {
  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-2'>Sign up for a free account</h1>
      <p className='py-2'>
        Already have an account yet?{' '}
        <Link to='/' className='underline'>
          Sign in.
        </Link>
      </p>
      <Form title='Sign up' />
    </div>
  );
};

export default SignUp;