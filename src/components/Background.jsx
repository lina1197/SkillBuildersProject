import React from 'react';
import "../../src/styles/style.css";
import { Link } from "react-router-dom";

export default function Cards() {
  return (
    <div className="HomeBackground"><img src="/images/layoutIMG.png" alt="" />
    <div className="d-flex justify-content-center align-items-center  "><Link to='/NotFound'><button className="my-button" style={{marginRight:"10px"}}>Commencer</button></Link>
    <Link to='/NotFound'><button className="my-button">Toutes les formations</button></Link></div>
    
    </div>
  );

}
