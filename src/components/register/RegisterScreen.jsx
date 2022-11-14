import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import doFetch from "../../helpers/fetchHelper";
import "../Connexion/Connexion.css";
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthContext";

export default function RegisterScreen() {
  
  const { auth } = useContext(AuthContext);

  const {register, handleSubmit, formState: { errors } } = useForm();
  
  const formInvalid = (errors) => console.log("Errors", errors);

  const [msg, setMsg] = useState("");
  const formSubmit = async (formData) => {

    const {data} = await doFetch("auth/register", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    console.log(data)
    setMsg(data.message)
  }
  
  return (
    <>
    <div className="main">
        <Navbar />
        <img src='./assets/images/instantfarfaday.png' className='taille'/>
        <div className="container fond">
            <div className="signup-content">
                <form onSubmit={handleSubmit(formSubmit, formInvalid)} noValidate id="signup-form" className="signup-form">
                    <h2>S'inscrire </h2>
                    <p className="desc">obtenez -10% dans les articles (<span>“InstantFarfaday Backgrounds”</span>).</p>
                     <div className="form-group">
                        <input type="text" className="form-input" name="name" id="pseudo-input" placeholder="Votre Pseudo" {...register("pseudo", { required: true, minLength: 3 })}/>
                        <i className={"text-danger d-block"}>{errors.pseudo ? "* au moins 3 caractères" : " " }</i>
                    </div> 
                   <div className="form-group">
                        <input type="email" className="form-input" name="login" id="email-input" placeholder="Email" {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i })}/>
                        <i className={"text-danger d-block"}>{errors.email ? "* Doit être une adresse e-mail valide" : " " }</i>
                    </div>
                    <div className="form-group">
                        <input type="submit" name="submit" id="submit" className="form-submit submit" value="S'inscrire"/>
                        {auth.role === 0 && <Link to="/login" className="submit-link submit">Connexion</Link>}
                    </div>
                    <div className="text-light">{msg}</div>
                </form>
            </div>
        </div>
    </div>
    </>
  );
}