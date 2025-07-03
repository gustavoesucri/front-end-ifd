import styles from "./Projeto.module.css";
import { Link } from "react-router-dom";

function Projeto({ imagemUrl, textoResumo, slug, nomeProjeto }) {
  return (
    <Link to={`/projetos/${slug}`}>
      {" "}
      {/*Alterar bem mais esse style, via module styles. Não diretamente pelo style */}
      <div className={styles.projeto}>
        <img src={imagemUrl} alt={`Imagem do projeto ${nomeProjeto}`} />
        <p>{textoResumo}</p>
      </div>
    </Link>
  );
}

export default Projeto;
