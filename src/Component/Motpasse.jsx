/** @format */

import "./Motdepasse.css";

import React from "react";
import { Link } from "react-router-dom";
import pil from "./image/cropped-Logo-bakeli-3.png";
function Mot() {
  return (
    <div className='container mt-2'>
      <div className='row met mx-auto'>
        <img src={pil} className='img' />
        <div className='col-md-12 mt-4'>
          <label>Nouveau mot de passe</label>
          <input
            type='Mot de passe'
            className='form-control'
            placeholder='Entrez le mot de passe à nouveau'
          />
        </div>
      </div>
      <Link to='/Mot'></Link>
    </div>
  );
}
export default Mot;
