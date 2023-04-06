import React from 'react';
import Navigation from "./Navigation";
import Footer from "./Footer";
import "../../src/styles/Marketing.css";

export default function marketing() {
    return(
        <div>
            <Navigation />
            <div className="mconteneur1">
                <h2 className="tf1">Diplôme en Marketing </h2>
                <p className="tp">Cette formation en marketing vise à fournir aux participants les compétences nécessaires pour concevoir et mettre en œuvre des stratégies marketing efficaces pour les entreprises. Les participants apprendront à analyser les tendances du marché, à comprendre le comportement des consommateurs, à concevoir des produits et des services attrayants, à élaborer des plans de marketing, à établir des budgets marketing et à mesurer le retour sur investissement de leurs activités marketing.</p>
                <h2 className="tf">Durée de la formation :</h2>
                <p className="tp">6 mois (à temps partiel)</p>
                <h2 className="tf">Modules de la formation :</h2>
                <p className="tp"> Fondements du marketing : introduction aux principes fondamentaux du marketing et à la compréhension du marché.<br />
                    Comportement des consommateurs : analyse du comportement des consommateurs et des tendances du marché.<br />
                    Conception de produits et services : apprendre à concevoir des produits et des services qui répondent aux besoins des clients.<br />
                    Planification stratégique : élaboration d'un plan de marketing stratégique.<br />
                    Budget marketing : gestion des budgets marketing pour optimiser le retour sur investissement.<br />
                    Mesure de la performance : évaluation de l'efficacité des activités marketing et mesure du retour sur investissement.
                </p>
                <h2 className="tf">Frais de la formation :</h2>
                <p className="tp"> 4000 euros (TVA incluse)</p>
            </div>
            <Footer />
        </div>  
    );
}
