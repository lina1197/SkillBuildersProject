import React from 'react';
import Card2 from './Card2';
import CardGrid2 from './CardGrid2';
import "../../src/styles/style.css";

const TheCards2 = () => (
    <div className="TheCards2">
  <CardGrid2>
    { Array(4).fill().map((_, i) => (
        <Card2 key={i}>
          {i === 0 && <div className="flexD"><img src="/images/cards3Png1.png" alt="" /> <div><h3> Journée de l'innovation</h3><p>Événement annuel de l'école pour célébrer l'innovation et la créativité des étudiants, avec des présentations de projets, des ateliers pratiques et des conférences inspirantes.
</p></div> </div>}
           {i === 1 && <div className="flexD"><img src="/images/cards3Png2.png" alt="" /><div><h3>Journée carrière</h3> <p>Événement annuel de l'école pour célébrer l'innovation et la créativité des étudiants, avec des présentations de projets, des ateliers pratiques et des conférences inspirantes.</p></div>  </div>}
            {i === 2 && <div className="flexD"><img src="/images/cards3Png3.png" alt="" /><div><h3>Journée culturelle</h3> <p>une journée de célébration de la diversité culturelle des étudiants, avec des présentations culturelles, des ateliers d'artisanat, des démonstrations culinaires et des performances artistiques.</p></div> </div>}
             {i === 3 && <div className="flexD"><img src="/images/cards3Png4.png" alt="" /> <div><h3>Hackathon</h3> <p>un événement de codage de 24 heures pour les étudiants qui aiment travailler en équipe, explorer de nouvelles technologies et concevoir des projets innovants.</p></div> </div>}

        </Card2>
      ))
    }
  </CardGrid2>
  <div style={{ padding: '3px', margin:'0', textAlign:"center"}}>
      <button className="btn btn-rounded btn-light text-primary text-sm-center" >Voir plus</button>
    </div>
        </div>

)
export default TheCards2;