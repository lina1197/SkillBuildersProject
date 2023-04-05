import React from 'react';
import Card0 from './Card0';
import CardGrid0 from './CardGrid0';
import "../../src/styles/style.css";

const TheCards0 = () => (
  <CardGrid0>
    { Array(4).fill().map((_, i) => (
        <Card0 key={i}>
          {/* <h2>Card {i + 1}</h2> */}
          {i === 0 && <div><img src="/images/cards1Png1.jpg" alt="" /> <h3> 5000+ <br />
                Apprenants inscrits</h3> </div>}
           {i === 1 && <div><img src="/images/cards1Png2.png" alt="" /> <h3>95% <br />
                Taux de réussite</h3> </div>}
            {i === 2 && <div><img src="/images/cards1Png3.png" alt="" /><h3>1000+ <br />
                Formations disponibles</h3> </div>}
             {i === 3 && <div><img src="/images/cards1Png4.png" alt="" /><h3> 150+ <br />
                Formateurs expérimentés</h3> </div>}

        </Card0>
      ))
    }
  </CardGrid0>
)
export default TheCards0;