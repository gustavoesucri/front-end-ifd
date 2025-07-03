import NomeParceiro from "./NomeParceiro.jsx";
import styles from "./ListaNomesParceiros.module.css";
import { useEffect, useState } from "react";
import api from "../../../api/api.jsx";

function ListaNomesParceiros() {
  const [parceiros, setParceiros] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/parceiros")
      .then((response) => {
        setParceiros(response.data);
        setErrorMessage(null);
      })
      .catch((error) => {
        console.error("Erro ao resgatar dados de parceiros", error);
        setErrorMessage("Erro ao resgatar a lista de nomes dos parceiros");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className={styles.listaNomesParceiros}>
        Carregando lista de nomes dos parceiros...
      </div>
    );
  }

  if (errorMessage) {
    return <div className={styles.listaNomesParceiros}>{errorMessage}</div>;
  }

  return (
    <ul className={styles.listaNomesParceiros}>
      {parceiros.map((parceiro) => (
        <NomeParceiro
          key={parceiro.id}
          nomeParceiro={parceiro.nomeParceiro}
          externalUrl={parceiro.externalUrl}
        />
      ))}
    </ul>
  );
}

export default ListaNomesParceiros;
