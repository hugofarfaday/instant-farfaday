import logo from './logo.svg';
import './App.css';
import RegisterScreen from './components/register/RegisterScreen';
import AccountValidateScreen from './components/Account/AccountValidateScreen';
import HomeScreen from './components/HomeScreen/HomeScreen';
import { Route, Routes } from 'react-router-dom';
import Connexion from './components/Connexion/Connexion';
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from 'react';
import AccountScreen from './components/Account/AccountScreen';

function App() {

  const { auth } = useContext(AuthContext);

  return (
    <>
    {/* <HomeScreen /> */}

    <Routes>
        <Route path="/" element= {<HomeScreen />} />
        {auth.role === 0 &&<Route path="/login" element= {<Connexion />} />}
        {auth.role === 0 && <Route path="/register" element={<RegisterScreen />} />}
        {auth.role > 0 && <Route path="/account" element={<AccountScreen />} />}
        {auth.role === 0 && <Route path="/account/validate/:token" element={<AccountValidateScreen />} />}
      </Routes>
    </>
  );
}

export default App;
