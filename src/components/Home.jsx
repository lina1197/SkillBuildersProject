
import React from "react";
import Layout from "./Layout";
import Footer from "./Footer";
import TheCards0 from "./TheCards0";
import TheCards from "./TheCards";
import TheCards2 from "./TheCards2";
import Testimonial from "./Testimonial";
const Home = () => {
  return (
    <div>
      <Layout />
      <TheCards0  />
                  <div style={{textAlign:"center"}}><h2>Projets réalisés par nos anciens apprenants</h2></div>

            <TheCards/>
            <div style={{textAlign:"center"}}><h2>Événements à venir</h2></div>
            <TheCards2/>
                        <div style={{textAlign:"center"}}><h2>Témoignages</h2></div>

            <Testimonial/>

      <Footer />
    </div>
  );
};

export default Home;
