

import React from "react";
import { Link } from "react-router-dom";
import pil from "./image/cropped-Logo-bakeli-3.png";
function Deconnex(){
    return (
      <div className=''>
        <img src={pil} className='img' />

        <h1 className="text-center">Bienvenu <br></br> je suis<br></br> Ndeye nini<br></br> @senghor</h1>
        <Link to='/Deconnex'></Link>
      </div>
    );
    
}
export default Deconnex;
