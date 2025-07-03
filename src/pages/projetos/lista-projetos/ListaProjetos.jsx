import { useEffect, useState } from "react";
import Projeto from "./Projeto.jsx";
import api from "../../../api/api.jsx";

function ListaProjetos() {
  const [projetos, setProjetos] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/projetos")
      .then((response) => {
        setProjetos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao resgatar dados de projetos:", error);
        setErrorMessage("Erro ao carregar os dados.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando projetos...</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return (
    <div>
      {projetos.map((projeto) => (
        <Projeto
          key={projeto.id}
          imagemUrl={projeto.imagemUrl}
          textoResumo={projeto.textoResumo}
          slug={projeto.slug}
          nomeProjeto={projeto.nomeProjeto}
        />
      ))}
    </div>
  );
}

export default ListaProjetos;
