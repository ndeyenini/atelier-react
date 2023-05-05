/** @format */
import React from "react";
import "./Connect.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import pil from "./image/cropped-Logo-bakeli-3.png"

function connect() {
  return (
    <div className='container mt-4'>
      <div className='row met mx-auto  '>
        <img src={pil} className='img' />
        <div className='col-md-12 mx-auto mt-4'>
          <label>Email</label>
          <input
            type='Email'
            className='form-control'
            placeholder='sendeyenini@gmail.com'
          />
          <label>Mot de passe</label>
          <input
            type='Mot de passe'
            className='form-control'
            placeholder='Mot de passe'
          />
          <div className='text-center'>
            {/* <a href='#' className=''>
              inscrire
            </a> */}
          </div>
          <Link to='/Inscrip'>inscription</Link>
          <br></br>
          <Link to='/Mot' className=''>
            mot de passe oublié
          </Link>
          {/* <div className='text-end'>
            <a href='#' className=''>
              mot de passe oublie
            </a> */}
          {/* </div> */}
          <div className='text-center mt-5 mb-5 '>
            <button type='button' className='btn btn-primary'>
              Se connecter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect;
