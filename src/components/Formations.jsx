import React from 'react';
import Navigation from "./Navigation";
import Footer from "./Footer";
import "../../src/styles/Formations.css";
export default function Formations() {
    return(
        <div>
             <Navigation/>
        <div className="conteneur1">
        <div className="conteneur2">
          <h3 className="title">Des compétences à portée de clic<br />SkillBuilders en ligne !</h3>
        </div>
        <h1 className="titre">FORMATION</h1>
        <div className="contenu1">
          <h2 className="titre">MARKETING</h2>
          <img className="imag2" src="/images/formation/Sans titre (89).png" alt="imag2" />
          <a className="bouton-bleu" href="/Marketing">En savoir plus</a>
        </div>
        <div className="contenu1">
          <h2 className="titre">ADMINISTRATION ET SÉCURITÉ<br />DES RÉSEAUX INFORMATIQUES</h2>
          <img className="imag2" src="/images/formation/Sans titre (92).png" alt="imag2" />
          <a className="bouton-bleu" href="/Securite">En savoir plus</a>
        </div>
        <div className="contenu1">
          <h2 className="titre">BASES DE DONNÉES</h2>
          <img className="imag2" src="/images/formation/Sans titre (91).png" alt="imag2" />
          <a className="bouton-bleu" href="/Base">En savoir plus</a>
        </div>
        <div className="contenu1">
          <h2 className="titre">GESTION DES RESSOURCES HUMAINES</h2>
          <img className="imag2" src="/images/formation/Sans titre (90).png" alt="imag2" />
          <a className="bouton-bleu" href="/Ressource">En savoir plus</a>
        </div>
      </div>
      <Footer />
      </div>
        
        );
}


