import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Account from './components/Account';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className='App'>
      <h1 className='text-center text-3xl font-bold py-2'>
        Firebase Auth & Context
      </h1>

      <AuthProvider>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </AuthProvider>

      <Toaster position='bottom-center' reverseOrder={true} />
    </div>
  );
}

export default App;
