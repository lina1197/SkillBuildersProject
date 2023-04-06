import React from 'react';
import Navigation from "./Navigation";
import Footer from "./Footer";
import "../../src/styles/Marketing.css";

export default function Base() {
    return(
        <div>
            <Navigation />
            <div className="mconteneur1">
                <h2 className="tf1">Diplôme en Gestion de Base de Données </h2>
                <p className="tp">Cette formation en gestion de base de données vise à fournir aux participants les compétences nécessaires pour concevoir, créer et gérer des bases de données pour les entreprises. Les participants apprendront à utiliser les systèmes de gestion de bases de données relationnelles (SGBDR), à concevoir des bases de données efficaces et à utiliser des langages de requête pour extraire et manipuler les données.</p>
                <h2 className="tf">Durée de la formation :</h2>
                <p className="tp">6 mois (à temps partiel)</p>
                <h2 className="tf">Modules de la formation :</h2>
                <p className="tp"> Introduction aux bases de données : introduction aux principes fondamentaux des bases de données et des SGBDR.<br/>
Conception de bases de données : techniques de modélisation de données, y compris les diagrammes Entité-Relation (ER) et la normalisation.<br/>
Langage SQL : utilisation de SQL pour interagir avec les SGBDR et extraire et manipuler des données.<br/>
Administration de bases de données : installation, configuration et maintenance des SGBDR.<br/>
Sécurité des bases de données : introduction aux techniques de sécurité des bases de données, y compris la gestion des utilisateurs et des autorisations.<br/>
Data warehousing et Business Intelligence : introduction aux concepts de data warehousing et de Business Intelligence, y compris l'analyse de données et les outils de visualisation.
                </p>
                <h2 className="tf">Frais de la formation :</h2>
                <p className="tp"> 4500 euros (TVA incluse)</p>
            </div>
            <Footer />
        </div>  
    );
}