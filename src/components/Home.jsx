
import React from "react";
import Layout from "./Layout";
import Footer from "./Footer";
import TheCards0 from "./TheCards0";
import TheCards from "./TheCards";
import TheCards2 from "./TheCards2";
import TheCards3 from "./TheCards3";
import Testimonial from "./Testimonial";
import SearchBar from "./SearchBar";
const Home = () => {
  return (
    <div>
      <Layout />
      <TheCards0  />
      <div style={{textAlign:"center"}}><h2>Ta formation pour réussir</h2> <p style={{fontSize:"2rem", width:"60%", margin:"auto"}} >Choisis la formation la plus adaptée à tes besoins parmis notre liste, fais le premier pas pour atteindre tes objectifs</p></div>
            
<SearchBar />
              <TheCards/>

                  <div style={{textAlign:"center"}}><h2>Projets réalisés par nos anciens apprenants</h2></div>
            <TheCards3/>

            <div style={{textAlign:"center"}}><h2>Événements à venir</h2></div>
            <TheCards2/>
                        <div style={{textAlign:"center"}}><h2>Témoignages</h2></div>
            <Testimonial/>
      <Footer />
    </div>
  );
};
export default Home;
