import React from "react";
import styles from "./Navigator.module.css";
import { Link } from "react-router-dom";

function Navigator() {
  return (
    <div className={styles.navigator}>
      {/* Home | Projetos | Contato */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projetos">Projetos</Link>
          </li>
          <li>
            <Link to="/campanhas">Campanhas</Link>
          </li>
          <li>
            <Link to="/noticias">Notícias</Link>
          </li>
          <li>
            <Link to="/parceiros">Parceiros</Link>
          </li>
          <li>
            <Link to="/doacoes">Doações</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigator;
