import { useEffect, useState } from "react";
import Campanha from "./Campanha.jsx";
import api from "../../../api/api.jsx";

function ListaCampanhas() {
  const [campanhas, setCampanhas] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/campanhas")
      .then((response) => {
        setCampanhas(response.data);
      })
      .catch((error) => {
        console.error("Erro ao resgatar dados de campanhas", error);
        setErrorMessage("Erro ao carregar os dados.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando campanhas...</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return (
    <div>
      {campanhas.map((campanha) => (
        <Campanha
          key={campanha.id} // É crucial usar uma key única ao renderizar listas
          imagemUrl={campanha.imagemUrl}
          textoResumo={campanha.textoResumo}
          // paragrafos={campanha.paragrafos}
          slug={campanha.slug}
          nomeCampanha={campanha.nomeCampanha}
        />
      ))}
    </div>
  );
}

export default ListaCampanhas;
