import styles from "./Campanhas.module.css";
import ListaCampanhas from "./lista-campanhas/ListaCampanhas";

function Campanhas() {
  return (
    <section className={styles.campanhas}>
      <h1>Campanhas</h1>
      <ListaCampanhas />
      {/* Colocar aqui o componente alternador de páginas. */}
    </section>
  );
}

export default Campanhas;
