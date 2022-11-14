import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from "react";
import { deleteCookie } from '../../helpers/cookieHelper';
import AccountScreen from '../Account/AccountScreen';

  function Navbar() {

    const { auth, setAuth } = useContext(AuthContext);

    return (
      <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <img src='./assets/images/instantfarfaday.png' style={{width: '8rem'}}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <Link to='/'>Accueil</Link>
          {auth.role === 0 &&
          <Link to='/login' className='link2'>Se Connecter</Link>}
            {auth.role === 1 && 
              <Link to="/admin" className="btn btn-sm btn-primary me-2">Admin</Link>}
            {auth.role > 0 && 
              <Link to="/logged" className="btn btn-sm btn-primary me-2">Se déconnecter</Link>}
            {auth.role > 0 && 
              <Link to="/account" className="btn btn-sm btn-primary me-2">Mon compte</Link>}
            {auth.role > 0 && 
            <button className="btn btn-sm btn-secondary" 
                onClick={e => {
                    setAuth({role:0, id:0});
                    deleteCookie("blog");
                    window.location.href = "/login";
                  }
                }>Se déconnecter</button>}
      </ul>
    </div>
  </div>
</nav>
</>
    )
              }
export default Navbar;
