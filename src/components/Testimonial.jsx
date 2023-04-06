import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../../src/styles/style.css";

const Testimonial = () => {
    return (
      <Carousel
      showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}>
        <div >
          <img src="/images/sliderIMG.png" />
          <div className="myCarousel"><h3>Ali BEN RACHED</h3>
            <h4>Designer</h4>
            <p>
              En tant qu'étudiant dans une école de formation, je suis impressionné par la qualité de l'enseignement et les installations modernes. Les professeurs sont hautement qualifiés et engagés dans leur travail. L'école offre des opportunités de stage en entreprise pour acquérir une expérience pratique et de précieux contacts professionnels. En somme, je suis très satisfait de mon choix et je suis confiant pour mon avenir professionnel.
            </p></div>
          
        </div>
        <div>
          <img src="/images/sliderIMG2.png" />
          <div className="myCarousel"><h3>Lily Chen</h3>
            <h4>étudiante</h4>
            <p>
              Je suis actuellement étudiante en marketing dans une école de formation en ligne et je suis ravie de la flexibilité offerte par cette méthode d'apprentissage. Les cours en ligne me permettent de gérer mon temps plus efficacement tout en développant mes compétences marketing de manière pratique et interactive. Je suis convaincue que cette expérience d'apprentissage en ligne sera un atout précieux pour ma future carrière.
            </p></div>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }; 
  export default Testimonial;
