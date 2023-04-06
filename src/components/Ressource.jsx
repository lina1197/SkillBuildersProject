import React from 'react';
import Navigation from "./Navigation";
import Footer from "./Footer";
import "../../src/styles/Marketing.css";

export default function Ressource() {
    return(
        <div>
            <Navigation />
            <div className="mconteneur1">
                <h2 className="tf1">Diplôme en Gestion des Ressources Humaines </h2>
                <p className="tp">Cette formation en Gestion des Ressources Humaines vise à fournir aux participants les compétences nécessaires pour gérer efficacement les ressources humaines des entreprises, notamment la gestion des recrutements, la formation, la rémunération, la gestion de la performance et la gestion des conflits.</p>
                <h2 className="tf">Durée de la formation :</h2>
                <p className="tp">1 an (à temps partiel)</p>
                <h2 className="tf">Modules de la formation :</h2>
                <p className="tp"> Introduction à la gestion des ressources humaines : introduction aux principes fondamentaux de la gestion des ressources humaines, y compris les rôles et les responsabilités du personnel de la fonction RH.<br/>
Recrutement et sélection : techniques de recrutement, d'entretien et de sélection des candidats, y compris les tests de sélection et la vérification des références.<br/>
Formation et développement : conception et mise en œuvre de programmes de formation et de développement pour les employés, y compris la planification de la succession.<br/>
Rémunération et avantages sociaux : gestion des salaires, des avantages sociaux et des incitations, y compris la conception de plans de rémunération incitatifs.<br/>
Gestion de la performance : évaluation de la performance des employés et mise en place de plans d'amélioration de la performance.<br/>
Gestion des conflits : techniques de gestion des conflits sur le lieu de travail, y compris la médiation et la résolution des différends.
                </p>
                <h2 className="tf">Frais de la formation :</h2>
                <p className="tp"> 6000 euros (TVA incluse)</p>
            </div>
            <Footer />
        </div>  
    );
}
