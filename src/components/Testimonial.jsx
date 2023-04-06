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
          <img src="/images/sliderIMG3.png" />
          <div className="myCarousel"><h3> Sabah BENSAID</h3>
            <h4>professeur</h4>
            <p>
              En tant que professeur en ligne, j'apprécie la souplesse de l'enseignement en ligne qui permet aux étudiants de suivre les cours à leur propre rythme tout en bénéficiant d'une attention individualisée. Notre école en ligne propose des programmes d'études de qualité supérieure qui sont conçus pour préparer les étudiants à réussir dans leur domaine de prédilection. C'est un honneur pour moi de faire partie de cette communauté d'apprentissage en ligne dynamique et en constante évolution.
            </p></div>
        </div>
      </Carousel>
    );
  }; 
  export default Testimonial;
