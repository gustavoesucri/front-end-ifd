import Noticia from "./Noticia.jsx";
import styles from "./ListaNoticias.module.css";
import { useEffect, useState } from "react";
import api from "../../../api/api.jsx";

function ListaNoticias() {
  const [noticias, setNoticias] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/noticias")
      .then((response) => {
        setNoticias(response.data);
      })
      .catch((error) => {
        console.error("Erro ao resgatar dados de noticias", error);
        setErrorMessage("Erro ao carregar os dados.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className={styles.listaNoticias}>Carregando notícias...</p>;
  }

  if (errorMessage) {
    return <p className={styles.listaNoticias}>{errorMessage}</p>;
  }

  return (
    <div className={styles.listaNoticias}>
      {noticias.map((noticia) => (
        <Noticia
          key={noticia.id} // É crucial usar uma key única ao renderizar listas
          imagemUrl={noticia.imagemUrl}
          chamada={noticia.chamada} // É diferente do título da notícia e do textoResumo das outras páginas.
          slug={noticia.slug}
          nomeNoticia={noticia.nomeNoticia} // Esse seria o título da notícia
        />
      ))}
    </div>
  );
}

export default ListaNoticias;
