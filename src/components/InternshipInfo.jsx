

import React, { useEffect } from 'react';

export default function InternshipInfo() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    const debounce = (func, wait = 10, immediate = true) => {
      let timeout;
      return function() {
        const context = this,
              args = arguments;
        const later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };
    const checkFadeIn = () => {
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const screenHeight = window.innerHeight;
        if (elementTop < screenHeight && elementBottom > 0) {
          element.classList.add('visible','active');
        } else {
          element.classList.remove('visible','active');
        }
      });
    };
    window.addEventListener('scroll', debounce(checkFadeIn));
    return () => window.removeEventListener('scroll', debounce(checkFadeIn));
  }, []); 

  return (
    <div className="InternshipInfo">
      <h1>Programme de stage</h1>
      <h2>Aperçu :</h2>
      <p className="fade-in">Acquérez une expérience pratique dans le domaine [field] en rejoignant notre programme de stage.
Travaillez avec une équipe de professionnels expérimentés et apprenez de leur expertise.
Relevez des défis et développez vos compétences dans un environnement favorable.
En tant que [nom de l'école] leader qui propose des cours en présentiel et en ligne, nous offrons une expérience d'apprentissage unique qui vous permet d'améliorer vos compétences et vos connaissances de n'importe où.</p>
      <h2>Exigences :</h2>
      <ul className="fade-in">
        <li>Inscription actuelle dans un programme [domaine en relation] dans un collège ou une université accréditée.</li>
        <li>De solides compétences analytiques et de résolution de problèmes.</li>
        <li>Maîtrise de [logiciels ou outils pertinents].</li>
        <li>Excellentes compétences en communication écrite et verbale.</li>
      </ul>
      <h2>Durée :</h2>
      <p className="fade-in">Programme de stage de 3 mois commençant le [date de début].
Poste à temps plein (40 heures/semaine) avec possibilité de prolongation.</p>
      <h2>Rémunération :</h2>
      <p className="fade-in">Forfait de rémunération compétitif incluant [liste des avantages ou des primes].</p>
      <h2>Processus de candidature :</h2>
      <p className="fade-in">Envoyez votre CV, votre lettre de motivation et votre portfolio (le cas échéant) à <a href="mailto:email@example.com">email@example.com</a> avant le [date limite de candidature].
Les candidats retenus seront invités à participer à une série d'entretiens.
Les candidats finaux seront informés de leur sélection avant le [date de notification].</p>
      <h2>Informations supplémentaires :</h2>
      <p className="fade-in">Notre culture d'entreprise est axée sur la collaboration, l'innovation et la croissance.
Il y a des possibilités de mentorat et de développement professionnel.
Nous sommes fortement engagés en faveur de la diversité, de l'équité et de l'inclusion.
</p>
    </div>
  )
}
