import React from 'react';
import Card3 from './Card3';
import CardGrid3 from './CardGrid3';
import "../../src/styles/style.css";
import { Link } from "react-router-dom";

const TheCards3 = () => (
      <div className="TheCards3">

  <CardGrid3>
    { Array(3).fill().map((_, i) => (
        <Card3 key={i}>
          {i === 0 && <div><img src="/images/cards4Png1.png" alt="" /> <div><h3>Création d'un site web de commerce électronique</h3> <p>Nos apprenants ont conçu un site web pour une entreprise qui souhaite vendre ses produits en ligne. Ils ont inclut des fonctionnalités telles que la navigation par catégorie de produits, la recherche de produits, la création d'un compte utilisateur et le paiement en ligne.</p></div> </div>}
           {i === 1 && <div><img src="/images/cards4Png2.png" alt="" /><div><h3>Analyse de la présence en ligne</h3> <p> Nos apprenants ont réalisé une analyse approfondie de la présence en ligne d'une entreprise, y compris son site web, ses comptes de médias sociaux et ses publications en ligne. Ils ont ainsi identifier les domaines à améliorer et proposer des stratégies pour renforcer la présence en ligne de l'entreprise.</p></div>  </div>}
            {i === 2 && <div><img src="/images/cards4Png3.png" alt="" /><div><h3>Création d'un robot humanoïde</h3> <p>Nos apprenants ont crée un robot humanoïde en utilisant des moteurs et des capteurs pour reproduire les mouvements humains. Le robot peut être programmé pour effectuer des tâches spécifiques, telles que la marche, la danse ou la manipulation d'objets. Ce type de projet peut être utilisé pour la recherche en robotique ou pour les applications de divertissement.</p></div> </div>}
             

        </Card3>
      ))
    }
   
    
  </CardGrid3> 
  
    <div style={{ padding: '3px', margin:'0', textAlign:"center"}}>
      <Link to='/NotFound'><button className="btn btn-rounded btn-light text-primary text-sm-center" >Voir plus</button></Link>
      
    </div>
  </div>
)
export default TheCards3;