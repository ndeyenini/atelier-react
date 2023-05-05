/** @format */
import React from "react";
import { Link } from "react-router-dom";
import pil from "./image/cropped-Logo-bakeli-3.png";
function Inscrip() {
  return (
    <div className='container mt-4'>
      <div className='row met mx-auto  '>
        <img src={pil} className='img' />
        <h3 className="text-danger">Bienvenu sur ma page d'inscription</h3>
        <div className='col-md-12 mx-auto mt-4'>
          <label>Votre nom</label>
          <input
            type='Email'
            className='form-control'
            placeholder='Prenom et Nom'
          />
          <br></br>
          <label>Numero de téléphone</label>
          <input
            type='telephone'
            className='form-control'
            placeholder='Téléphone'
          />
          <br></br>
          <label>mot de passe</label>
          <input
            type='Mot de passe'
            className='form-control'
            placeholder='mot de passe'
          />
          <br></br>
          <label>nouveau mot de passe</label>
          <input
            type='Mot de passe'
            className='form-control'
            placeholder='Entrez le mot de passe à nouveau'
          />
          <br></br>
          <Link to='/Deconnex'>Connexion</Link>
          {/* <div className='text-center'>
            <a href='#' className=''>
              inscrire
            </a>
          </div>
          <div className='text-center'>
            <a href='#' className=''>
              mot de passe oublie
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Inscrip;
