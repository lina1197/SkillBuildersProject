import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Home,Footer,Cards,Apropos,Formations,Evenements,Calendrier,Marketing,Securite,Base,Ressource,Sinscrire,SeConnecter,NotFound,Carriere, Carrieres }  from "./components"; 
import Layout from './components/Layout';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
            <Route path="/Calendrier" element={<Calendrier />} />
            <Route path="/Formations" element={<Formations />} />
            <Route path="/Evenements" element={<Evenements />} />
            <Route path="/Marketing" element={<Marketing />} />
            <Route path="/Securite" element={<Securite />} />
            <Route path="/Base" element={<Base />} />
            <Route path="/Ressource" element={<Ressource />} />
<Route path='*' element={<NotFound />}/>
      <Route path="/Carrieres" element={<Carrieres />} />


    </Routes>
  </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
