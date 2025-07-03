import styles from "./Noticias.module.css";
import ListaNoticias from "./lista-noticias/ListaNoticias";

function Noticias() {
  return (
    <section className={styles.noticias}>
      <h1>Notícias</h1>
      <ListaNoticias />
      {/* Colocar aqui o componente alternador de páginas. */}
    </section>
  );
}

export default Noticias;
