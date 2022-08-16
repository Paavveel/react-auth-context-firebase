import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Form from './Form';

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logIn } = useAuth();

  let from = location.state?.from?.pathname || '/account';

  const handleSignIn = async (email, password) => {
    try {
      await logIn(email, password);
      toast.success('Your successfuly log in');
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-2'>Sign in to your account</h1>
      <p className='py-2'>
        Don't have an account yet?{' '}
        <Link to='/signup' className='underline'>
          Sign up.
        </Link>
      </p>
      <Form title='Sign in' handleSubmit={handleSignIn} />
    </div>
  );
};

export default SignIn;
