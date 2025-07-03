import styles from "./Campanha.module.css";
import { Link } from "react-router-dom";

function Campanha({ imagemUrl, textoResumo, slug, nomeCampanha }) {
  return (
    <Link to={`/campanhas/${slug}`} style={{ textDecoration: "none" }}>
      {" "}
      {/*Alterar bem mais esse style, via module styles. Não diretamente pelo style */}
      <div className={styles.campanha}>
        <p>{textoResumo}</p>
        <img src={imagemUrl} alt={`Imagem da campanha ${nomeCampanha}`} />
      </div>
    </Link>
  );
}

export default Campanha;
