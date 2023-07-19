import React from "react";
import my_self from "../../images/Moi.jpg";
import "../../styles/Home.css";

export default function Home() {
  const name = "AlexCoding";
  return (
    <div className="App">
      <div className="box-container-left box">
        <div className="name">
          <h1>
            <span>{"<"}</span>
            {name}
            <span>{" />"}</span>{" "}
          </h1>
        </div>
        {/* <div > */}
        <section className="about">
          <h1>
            Full-Stack <br /> Developper<span>.</span>
          </h1>
          <br />
          <p>
            J'aime créer des applications web complètes, dynamiques <br /> et
            évolutif avec une excellente expérience utilisateurs.
          </p>
          <div className="qualiter">
            <p>
              Amélioration progressive de l'interface utilisateurs et rapidité.
            </p>
            <p>
              Un ans d'expérience dans la création de site / application web.
            </p>
          </div>
        </section>

        {/* </div> */}
      </div>
      <div className="box-container-rigth box">
        <ul className="liste-lien">
          <li>
            <a href="https://docs.google.com/document/d/18ouBDyGVQbc5B05FpnwGUHoj4vUNaDWU5YSd3j6UV4E/edit#">
              Mon CV
            </a>
            <a href="/">Mon résumé</a>
          </li>
        </ul>
        <div className="my-image">
          <img src={my_self} alt="" />
        </div>
      </div>
      {/* <Loader/> */}
    </div>
  );
}
