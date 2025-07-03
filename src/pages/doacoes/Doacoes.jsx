import React from "react";
import styles from "./Doacoes.module.css";
import DoacoesCartaoCredito from "./doacoes-cartao-credito/DoacoesCartaoCredito";
import DoacoesDeposito from "./doacoes-deposito/DoacoesDeposito";
import DoacoesPix from "./doacoes-pix/DoacoesPix";

function Doacoes() {
  return (
    <>
      <section className={styles.doacoes}>
        <h1>Doações</h1>
        <p className={styles.parag}>
          Contribua com o Instituto de Educação Especial Fabrício Dantas!{" "}
        </p>
        <div>
          <DoacoesPix />
          <DoacoesDeposito />
          <DoacoesCartaoCredito />
        </div>
      </section>
    </>
  );
}

export default Doacoes;
