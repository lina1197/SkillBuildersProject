import Card4 from './Card4';
import CardGrid4 from './CardGrid4';
import "../../src/styles/style.css";
import { Link } from "react-router-dom";


const TheCards4 = () => (
  <div className="TheCards4">
  <CardGrid4>
    { Array(3).fill().map((_, i) => (
        <Card4 key={i}>
          {i === 0 && <div>  <h2 > Analyste de données </h2>
<p>$65,000 / an <br />Temps plein </p><h5 style={{textAlign:"left",paddingLeft:"10px"}}><span>Critères:</span> </h5> <p style={{textAlign:"left",paddingLeft:"10px"}} > Master en statistiques requis <br />Expérience pratique en analyse de données <br />Collecte, analyse et présentation des données pour aider l'entreprise à prendre des décisions éclairées</p><div style={{ padding: '3px', bottom:'0px', textAlign:"center",display:"flex",justifyContent:"space-between"}}>
      <Link to='NotFound'><button className="btn btn-rounded btn-light text-primary text-sm-center" >En savoir plus</button></Link>

      <Link to='NotFound'><button className="btn btn-rounded btn-light text-primary text-sm-center" >Postuler maintenant</button></Link>

    </div></div>}
           {i === 1 && <div><h2>Développeur Full-stack</h2> <p>$75,000 / an<br />à distance <br />Temps plein  </p><h5 style={{textAlign:"left",paddingLeft:"10px"}}><span>Critères:</span> </h5> <p style={{textAlign:"left",paddingLeft:"10px"}}>Master en informatique requis <br />Expérience pratique avec les langages de programmation front-end et back-end <br />Conception, développement et mise en œuvre de sites Web et d'applications</p>
           <div style={{ padding: '3px', bottom:'0px', textAlign:"center",display:"flex",justifyContent:"space-between"}}>
      <Link to='NotFound'><button className="btn btn-rounded btn-light text-primary text-sm-center" >En savoir plus</button></Link>

      <Link to='NotFound'><button className="btn btn-rounded btn-light text-primary text-sm-center" >Postuler maintenant</button></Link>

    </div></div>}
            {i === 2 && <div>    <h2 >Assistant Administratif</h2><p>$40,000 / an<br />à distance <br />Temps plein</p> <h5 style={{textAlign:"left",paddingLeft:"10px"}}> <span>Critères:</span> </h5> <p style={{textAlign:"left",paddingLeft:"10px"}}>Master en administration des affaires requis <br />Expérience pratique en soutien administratif <br />Gestion de l'agenda, coordination des réunions et événements <br />Préparation de documents et communication avec les clients.</p><div style={{ padding: '3px', bottom:'0px', textAlign:"center",display:"flex",justifyContent:"space-between"}}>
      <Link to='NotFound'><button className="btn btn-rounded btn-light text-primary text-sm-center" >En savoir plus</button></Link>
      <Link to='NotFound' ><button className="btn btn-rounded btn-light text-primary text-sm-center" >Postuler maintenant</button></Link>
    </div>
</div>}

             

        </Card4>
      ))
    }
  </CardGrid4>
    <div style={{ padding: '3px', margin:'0', textAlign:"center"}}>
      <Link to='NotFound'><button className="btn btn-rounded btn-light text-primary text-sm-center" >Voir plus</button></Link>
    </div>
        </div>
)
export default TheCards4;