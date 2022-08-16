import { Route, Routes } from 'react-router-dom';
import Account from './components/Account';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className='App'>
      <h1 className='text-center text-3xl font-bold py-2'>
        Firebase Auth & Context
      </h1>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
