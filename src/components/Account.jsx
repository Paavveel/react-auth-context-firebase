import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Account = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success('Log out successful');
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-4'>Welcome to your Account</h1>
      <button className='border px-6 py-2 my-4' onClick={handleLogOut}>
        Log out from {user && user.email}
      </button>
    </div>
  );
};

export default Account;
