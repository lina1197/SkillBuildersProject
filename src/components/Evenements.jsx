import React from 'react';
import Navigation from "./Navigation";
import Footer from "./Footer";
import "../../src/styles/Evenements.css";
export default function Evenements() {
    return(
        <div>
             <Navigation/>
        <div className="conteneur1">
        <div className="conteneur2">
         <h3 className="title">Des compétences à portée de clic <br />  SkillBuilders en ligne !</h3>
        </div>
        <h1 className="titre">ÉVÉNEMENTS </h1>
      <div className="conteneur">
        <h2 className="titre">JOURNEE PORTES OUVERTES</h2>
        <div className="contenu">
        <img className="img1" src="/images/event/Sans titre (78).png" alt="img1" />
          <p className="para">Bonjour à tous, nous sommes ravis de vous accueillir à notre journée portes ouvertes. Notre école offre une gamme complète de programmes de formation dans différents domaines. Nous sommes heureux de vous offrir l'occasion de découvrir notre école, d'en apprendre davantage sur nos programmes et de rencontrer notre personnel et nos étudiants actuels.</p>
        </div>
      </div>
       <div className="conteneur">
       <h2 className="titre">UNE OCCASION UNIQUE POUR AMELIORER VOS COMPETENCES ET VOTRE CARRIERE</h2>
       <div className="contenu">
       <img className="img1" src="/images/event/Sans titre (86).png" alt="img1" />
         <p className="para">Nous sommes heureux de vous inviter à notre événement de séminaire pour une école, qui se tiendra le 13 Mai 2023 à Beyrouth . Cet événement est l'occasion idéale pour les étudiants, les diplômés et les professionnels de différentes industries de découvrir notre école et d'en apprendre davantage sur nos programmes de formation.</p>
       </div>
     </div>
     <div className="conteneur">
       <h2 className="titre">JOURNEE DE DEVELOPPEMENT PROFESSIONNEL : AMELIOREZ VOS COMPETENCES ET RENFORCEZ VOTRE CARRIERE</h2>
       <div className="contenu">
       <img className="img1" src="/images/event/Sans titre (87).png" alt="img1" />
         <p className="para">Nous sommes heureux de vous inviter à notre Journée de développement professionnel, qui se tiendra le 7 Avril 2023 à Beyrouth. Cet événement est l'occasion idéale pour les professionnels de différentes industries de découvrir de nouvelles tendances, d'apprendre de nouvelles compétences et de rencontrer des experts de l'industrie.</p>
       </div>
     </div>
     <div className="conteneur">
       <h2 className="titre">SALON DE L'EMPLOI : TROUVEZ VOTRE PROCHAINE OPPORTUNITE PROFESSIONNELLE</h2>
       <div className="contenu">
       <img className="img1" src="/images/event/Sans titre (88).png" alt="img1" />
         <p className="para">
  Nous sommes heureux de vous inviter à notre Salon de l'emploi, qui se tiendra le 25 Juin 2023 à Saida. Cet événement est l'occasion idéale pour les chercheurs d'emploi de rencontrer des employeurs potentiels, d'en apprendre davantage sur les opportunités d'emploi et de postuler à des postes vacants.</p>
       </div>
     </div>
     </div>
     <Footer />
     </div>  
        );
}