import React, { Component } from 'react';
import "./Connexion.css";
import Navbar from '../Navbar/Navbar';
import { PasswordRevealer } from 'password-revealer';
import { useState } from 'react';
import { AiOutlineEye, AiFillEye } from 'react-icons/ai';

function Connexion () {

    const [password, setPassword] = useState('');
    const [inputType, setInputType] = useState('password');
    
    return (
        <div className="main">
        <Navbar />
        <div className="container fond">
            <div className="signup-content">
                <form method="POST" id="signup-form" className="signup-form">
                    <h2>S'inscrire </h2>
                    <p className="desc">obtenez -10% dans la précommande <span>“Laurent le Gardien de la Galaxie”</span> avec le code promo (<span>“LaurentVaToutNiquer”</span>).</p>
                    <div className="form-group">
                        <input type="text" className="form-input" name="name" id="name" placeholder="Votre Nom"/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-input" name="email" id="email" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <input type={inputType} className="form-input" name="password" id="password-input" placeholder="Mot de passe" value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                        {inputType === "password" 
                        ? 
                        <AiOutlineEye onClick={() => setInputType('text')} />
                        : 
                        <AiFillEye onClick={() => setInputType('password')} />
                        }
                    </div>
                    <div className="form-group">
                        <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                        <label for="agree-term" className="label-agree-term"><span><span></span></span>Je suis d'accord avec toutes les déclarations dans  <a href="#" className="term-service">Conditions d'utilisation</a></label>
                    </div>
                    <div className="form-group">
                        <input type="submit" name="submit" id="submit" className="form-submit submit" value="S'inscire"/>
                        <a href="#" className="submit-link submit">Se connecter</a>
                    </div>
                </form>
            </div>
        </div>

    </div>
    )
}

export default Connexion;
