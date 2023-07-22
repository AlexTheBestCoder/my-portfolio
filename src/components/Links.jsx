import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import open_btn_violet from "../images/burger-bar-violet.png";
import open_btn_pink from "../images/burger-bar-pink.png";
import close_btn_violet from "../images/fermer-violet.png";
import close_btn_pink from "../images/fermer-pink.png";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPinkTheme, setIsPinkTheme] = useState(window.innerWidth <= 750);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsPinkTheme(window.innerWidth <= 750);
    };

    window.addEventListener("resize", handleResize);

    // Nettoyage de l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Affiche le bouton burger uniquement sur les petits écrans */}
      <button
        className={`burger-button ${isMenuOpen ? "open" : ""}`}
        onClick={handleMenuToggle}
      >
        <img
          src={
            isMenuOpen
              ? isPinkTheme
                ? close_btn_pink
                : close_btn_violet
              : isPinkTheme
              ? open_btn_pink
              : open_btn_violet
          }
          alt=""
        />
      </button>
      {/* Affiche le lien par défaut sur les grands écrans */}
      <ul className={`liste-lien ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to={"/"}>Accueil</Link>
          <Link to={"/"}>Resumer</Link>
          <Link to={"/"}>Projets</Link>
          <Link to={"/"}>Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default App;
