import styles from "./Noticia.module.css";
import { Link } from "react-router-dom";

function Noticia({ imagemUrl, chamada, slug, nomeNoticia }) {
  return (
    <Link to={`/noticias/${slug}`}>
      {" "}
      {/*Alterar bem mais esse style, via module styles. Não diretamente pelo style */}
      <div className={styles.noticia}>
        <h2>{chamada}</h2>
        <img src={imagemUrl} alt={`Imagem da notícia ${nomeNoticia}`} />
      </div>
    </Link>
  );
}

export default Noticia;
