import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Form from './Form';

const SignUp = () => {
  const { createUser } = useAuth();

  const handleSignUp = (email, password) => {
    const request = createUser(email, password);
    toast.promise(request, {
      loading: 'Loading...',
      success: 'Your registration is successful',
      error: error => error.message,
    });
  };

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-2'>Sign up for a free account</h1>
      <p className='py-2'>
        Already have an account yet?{' '}
        <Link to='/' className='underline'>
          Sign in.
        </Link>
      </p>
      <Form title='Sign up' handleSubmit={handleSignUp} />
    </div>
  );
};

export default SignUp;
