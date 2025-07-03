import styles from "./NomeParceiro.module.css";

function NomeParceiro({ nomeParceiro, externalUrl }) {
  const renderNome = () => <p>{nomeParceiro}</p>;

  return (
    <div className={styles.nomeParceiro}>
      <li type="square">
        {externalUrl ? (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`Visitar ${nomeParceiro}`}
          >
            {renderNome()}
          </a>
        ) : (
          renderNome()
        )}
      </li>
    </div>
  );
}

export default NomeParceiro;
