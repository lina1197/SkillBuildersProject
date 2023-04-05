
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../src/styles/style.css";

function Navigation() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src="/images/logo-project.png" alt="SkillBuilders Logo" />
          </NavLink>
         <button
  className="navbar-toggler"
  type="button"
  data-toggle="collapse"
  data-target="#navbarNav"
  aria-controls="navbarNav"
  aria-expanded={!isNavCollapsed ? true : false}
  aria-label="Toggle navigation"
  onClick={handleNavCollapse}
  style={{
    border: "none",
    backgroundColor: "transparent",
    outline: "none",
    height:"30px",
    lineHeight:"30px",
  }}
>
  <span
    className="navbar-toggler-icon"
    style={{
      display: "block",
      width: "1.2em",
      height: "2.5px",
      margin: "0.15em auto",
      background: "black"
    }}
  ></span>
  <span
    className="navbar-toggler-icon"
    style={{
      display: "block",
      width: "1.2em",
      height: "2.5px",
      margin: "0.15em auto",
      background: "black"
    }}
  ></span>
  <span
    className="navbar-toggler-icon"
    style={{
      display: "block",
      width: "1.2em",
      height: "2.5px",
      margin: "0.15em auto",
      background: "black"
    }}
  ></span>
</button>


          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/aPropos">
                  À propos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Formations">
                  Formations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Événements">
                  Événements
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Calendrier">
                  Calendrier
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Sinscrire">
                  S'inscrire
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/SeConnecter">
                  Se connecter
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
