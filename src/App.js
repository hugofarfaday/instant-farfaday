import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomeScreen from './components/HomeScreen/HomeScreen';
import { Route, Routes } from 'react-router-dom';
import Connexion from './components/Connexion/Connexion';

function App() {
  return (
    <>
    {/* <HomeScreen /> */}

    <Routes>
        <Route path="/" element= {<HomeScreen />} />
        <Route path="/Connexion" element= {<Connexion />} />
      </Routes>
    </>
  );
}

export default App;
