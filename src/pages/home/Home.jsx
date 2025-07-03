import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import api from "../../api/api";
import parse from "html-react-parser";

function Home() {
  const [paragrafos, setParagrafos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/home/1") // Está pegando do BD somente o id 1.
      .then((response) => {
        console.log(response.data); // Descomentar para verificar no console o que está vindo do BD.
        if (Array.isArray(response.data) && response.data.length > 0) {
          setParagrafos(response.data);
        } else {
          setParagrafos([
            "Nenhum texto está sendo disponibilizado pelo banco de dados. Verificar com o administrador do site.",
          ]);
        }
      })
      .catch((error) => {
        console.error("Erro ao resgatar o texto da Home:", error);
        setParagrafos([
          "Erro ao carregar os dados. Verificar com o administrador do site.",
        ]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.home}>
      <section className={styles.section}>
        <h1>Sobre</h1>
        {loading ? (
          <p>Carregando conteúdo da Home...</p>
        ) : (
          paragrafos.map((paragrafo, index) => <p key={index}>{parse(paragrafo)}</p>)
        )}
      </section>
    </div>
  );
}

export default Home;
