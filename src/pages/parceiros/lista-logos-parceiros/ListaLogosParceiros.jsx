import LogoParceiro from "./LogoParceiro.jsx";
import styles from "./ListaLogosParceiros.module.css";
import { useEffect, useState } from "react";
import api from "../../../api/api.jsx";

function ListaLogosParceiros() {
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
        console.error("Erro ao resgatar logos dos parceiros", error);
        setErrorMessage("Erro ao resgatar logos dos parceiros");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className={styles.listaLogosParceiros}>
        Carregando logos de parceiros...
      </div>
    );
  }

  if (errorMessage) {
    return <div className={styles.listaLogosParceiros}>{errorMessage}</div>;
  }

  return (
    <div className={styles.listaLogosParceiros}>
      {parceiros.map((parceiro) => (
        <LogoParceiro
          key={parceiro.id}
          logoUrl={parceiro.logoUrl}
          nomeParceiro={parceiro.nomeParceiro}
          externalUrl={parceiro.externalUrl}
        />
      ))}
    </div>
  );
}

export default ListaLogosParceiros;
