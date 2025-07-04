import { useState } from "react";
import styles from "./Parceiros.module.css";
import ListaLogosParceiros from "./lista-logos-parceiros/ListaLogosParceiros";
import ListaNomesParceiros from "./lista-nomes-parceiros/ListaNomesParceiros";
import { Link, useNavigate } from "react-router-dom";

function Parceiros() {
  const [assuntoParceiro, setAssuntoParceiro] = useState("parceiro");

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contato", { state: { assuntoParceiro: "parceiro" } });
  };

  return (
    <div className={styles.parceiros}>
      <section className={styles.section}>
        <h1>Parceiros</h1>
        <ListaLogosParceiros /> {/*Array de imagens laterais*/}
        <div className={styles.dupla}>
          <ListaNomesParceiros /> {/*Array de nomes em coluna*/}
          <div className={styles.sejaUmParceiro}>
            <h3>Seja um parceiro!</h3>
            <nav>
              <div>
                <button
                  className={styles.acessformButton}
                  onClick={handleNavigate}
                >
                  Clique aqui para abrir o formulário de contato
                </button>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Parceiros;
