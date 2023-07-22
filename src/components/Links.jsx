import React from "react";
import {Link} from "react-router-dom"

export default function Links() {
  return (
    <ul className="liste-lien">
      <li>
        <Link to={'/resumer'}>Mon resumer</Link>
        <Link to={'/projet'}>Mes projets</Link>
        <Link to={'/contact'}>Mes contacts</Link>
      </li>
    </ul>
  );
}
