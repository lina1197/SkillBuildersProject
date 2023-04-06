import React from 'react';
import Navigation from "./Navigation";
import Footer from "./Footer";
import "../../src/styles/Marketing.css";

export default function Securite() {
    return(
        <div>
            <Navigation />
            <div className="mconteneur1">
                <h2 className="tf1">Diplôme en Administration et Sécurité des Réseaux Informatiques </h2>
                <p className="tp">Cette formation en Administration et Sécurité des Réseaux Informatiques vise à fournir aux participants les compétences nécessaires pour administrer et sécuriser les réseaux informatiques des entreprises. Les participants apprendront à configurer, surveiller et maintenir les réseaux informatiques ainsi qu'à assurer la sécurité des données et des systèmes.</p>
                <h2 className="tf">Durée de la formation :</h2>
                <p className="tp">9 mois (à temps partiel)</p>
                <h2 className="tf">Modules de la formation :</h2>
                <p className="tp"> Introduction aux réseaux informatiques : introduction aux principes fondamentaux des réseaux informatiques et des protocoles de communication.<br/>
Administration des réseaux : configuration, surveillance et maintenance des réseaux informatiques, y compris la gestion des utilisateurs et des ressources.<br/>
Sécurité des réseaux : introduction aux techniques de sécurité des réseaux, notamment la cryptographie, les pare-feu et les politiques de sécurité.<br/>
Gestion des identités et des accès : gestion des identités et des accès aux systèmes et aux réseaux, y compris l'authentification et l'autorisation.<br/>
Sécurité des données : introduction aux techniques de sécurité des données, notamment le cryptage, la protection contre les attaques par déni de service (DoS) et les attaques par injection SQL.<br/>
Sécurité des applications : introduction aux techniques de sécurité des applications, notamment la protection contre les attaques de type cross-site scripting (XSS) et l'injection de code malveillant.
                </p>
                <h2 className="tf">Frais de la formation :</h2>
                <p className="tp"> 5000 euros (TVA incluse)</p>
            </div>
            <Footer />
        </div>  
    );
}