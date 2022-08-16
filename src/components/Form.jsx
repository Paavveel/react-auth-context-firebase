import React, { useState } from 'react';

function Form({ title, handleSubmit }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(email, pass);
      }}
    >
      <div className='flex flex-col py-2'>
        <label htmlFor='email' className='py-2 font-medium'>
          Email
        </label>
        <input
          type='email'
          id='email'
          className='border p-3'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className='flex flex-col py-2'>
        <label htmlFor='pass' className='py-2 font-medium'>
          Password
        </label>
        <input
          type='password'
          id='pass'
          className='border p-3'
          value={pass}
          onChange={e => setPass(e.target.value)}
        />
      </div>
      <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
        {title}
      </button>
    </form>
  );
}

export default Form;
