import React from 'react';
import Card from './Card';
import CardGrid from './CardGrid';
import "../../src/styles/style.css";

const TheCards = () => (
  <div className="TheCards">
  <CardGrid>
    { Array(4).fill().map((_, i) => (
        <Card key={i}>
          {/* <h2>Card {i + 1}</h2> */}
          {i === 0 && <div><img src="/images/cards2Png1.png" alt="" /> <h3>Formation Google Analytics</h3></div>}
           {i === 1 && <div><img src="/images/cards2Png2.png" alt="" /> <h3>Formation Marketing Numérique</h3></div>}
            {i === 2 && <div><img src="/images/cards2Png3.png" alt="" /> <h3>Formation en développement web</h3></div>}
             {i === 3 && <div><img src="/images/cards2Png4.png" alt="" /> <h3>Formation en leadership</h3></div>}

        </Card>
      ))
    }
  </CardGrid>
    <div style={{ padding: '3px', margin:'0', textAlign:"center"}}>
      <button className="btn btn-rounded btn-light text-primary text-sm-center" >Voir plus</button>
    </div>
        </div>
)
export default TheCards;