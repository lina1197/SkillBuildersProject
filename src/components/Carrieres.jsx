
import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import TheCards4 from "./TheCards4";
import InternshipInfo from "./InternshipInfo";

const Carrieres = () => {
  return (
    <div>
      <Navigation/>
       <div style={{textAlign:"center",marginTop:"70px"}}><h2>Offres d'emploi disponibles:</h2></div>
    <TheCards4/>

        <InternshipInfo/>



      
      <Footer />
    </div>
  );
};
export default Carrieres;