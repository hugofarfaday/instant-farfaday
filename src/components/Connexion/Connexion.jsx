import React, { useState, useContext } from "react";
import "./Connexion.css";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { setCookie, deleteCookie } from '../../helpers/cookieHelper';
import doFetch from '../../helpers/fetchHelper';
import Navbar from '../Navbar/Navbar';
import { AiOutlineEye, AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Connexion () {

    const [inputType, setInputType] = useState('password');
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const password = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [valid, setValid] = useState({ email: false, password: false });
  const validForm = () => {
    const isValid = { email: false, password: false };
    const emailInput = document.getElementById("email-input");
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailPattern.test(emailInput.value)) {
      isValid.email = true;
    }
    const passwordInput = document.getElementById("password-input");
    const passwordPattern = /^(?=.*[A-Z]).{6,}$/;
    if (passwordPattern.test(passwordInput.value)) {
      isValid.password = true;
    }
    setValid(isValid);
    return isValid.email === true && isValid.password === true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jsonData = Object.fromEntries(formData.entries());
    console.log(jsonData);
    if (!validForm()) {
      return;
    }
    const {data} = await doFetch("auth/login", {
      method: "POST",
      body: JSON.stringify(jsonData),
    });
    if (data.result) {
      setAuth({ role: +data.role, id: +data.id });
      setCookie("blog", data.token, { "max-age": 60 * 60 * 24 });
      navigate("/");
    } else {
      setAuth({ role: 0, id: 0 });
      deleteCookie("blog");
    }
  };
    
    return (
      <>
        <div className="main">
        <Navbar />
        <img src='./assets/images/instantfarfaday.png' className='taille'/>
        <div className="container fond">
            <div className="signup-content">
                <form onSubmit={handleSubmit} noValidate id="signup-form" className="signup-form">
                    <h2>Connexion </h2>
                    <p className="desc">obtenez -10% dans les articles (<span>“InstantFarfaday Backgrounds”</span>).</p>
                    {/* <div className="form-group">
                        <input type="text" className="form-input" name="name" id="name" placeholder="Votre Pseudo" onChange={handleChange}/>
                        <i className={"text-danger" + (valid.email ? " d-none" : "")}> * mettez une email valide.</i>
                    </div> */}
                    <div className="form-group">
                        <input type="email" className="form-input" name="login" id="email-input" placeholder="Email" onChange={handleChange}/>
                        <i className={"text-danger" + (valid.email ? " d-none" : "")}> * Doit être une adresse e-mail valide.</i>
                    </div>
                    <div className="form-group">
                        <input type={inputType} className="form-input" name="password" id="password-input" placeholder="Mot de passe"
                        onChange={handleChange}/>
                        {inputType === "password" 
                        ? 
                        <AiOutlineEye onClick={() => setInputType('text')} />
                        : 
                        <AiFillEye onClick={() => setInputType('password')} />
                        }
                        <i className={"text-danger" + (valid.password ? " d-none" : "")}>* 6 lettres dont une majuscule.</i>
                    </div>
                    {/* <div className="form-group">
                        <input type="checkbox" required name="agree-term" id="agree-term" className="agree-term" />
                        <label for="agree-term" className="label-agree-term"><span><span></span></span>Je suis d'accord avec toutes les déclarations dans  <a href='' className="term-service condi">Conditions d'utilisations.</a></label>
                    </div> */}
                    <div className="form-group">
                        <input type="submit" name="submit" id="submit" className="form-submit submit" value="Connexion"/>
                        {auth.role === 0 && <Link to="/register" className="submit-link submit">S'inscrire</Link>}
                    </div>
                </form>
            </div>
        </div>

    </div>
    </>
    )
}

export default Connexion;
