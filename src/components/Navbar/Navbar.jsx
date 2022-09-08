import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand"><img src='./assets/images/instantfarfaday.png' style={{width: '8rem'}}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item d-flex mt-1">
         <Link to="/">Accueil</Link>
        </li>
        <li className="nav-item d-flex">
         <Link to="/Connexion" className='link2'><img src='./assets/images/avatar.jpg' className='rounded-circle w mx-2'/>Connexion/ S'incrire</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
  }
}
