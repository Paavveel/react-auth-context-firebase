import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Form from './Form';

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { createUser } = useAuth();

  let from = location.state?.from?.pathname || '/account';

  const handleSignUp = async (email, password) => {
    try {
      await createUser(email, password);
      toast.success('Your registration is successful');
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
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
