import styles from "./Projetos.module.css";
import ListaProjetos from "./lista-projetos/ListaProjetos";

function Projetos() {
  return (
    <section className={styles.projetos}>
      <h1>Projetos</h1>
      <ListaProjetos />
      {/* Colocar aqui o componente alternador de páginas. */}
    </section>
  );
}

export default Projetos;
