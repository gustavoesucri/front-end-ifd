import styles from "./LogoParceiro.module.css";

function LogoParceiro({ logoUrl, nomeParceiro, externalUrl }) {
  const renderImagem = () => (
    <img
      src={logoUrl}
      alt={`Logo do parceiro ${nomeParceiro}`}
      title={nomeParceiro}
    />
  );

  return (
    // Se o externalUrl não existir não terá link externo
    <div className={styles.logoParceiro}>
      {externalUrl ? (
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={`Visitar ${nomeParceiro}`}
        >
          {renderImagem()}
        </a>
      ) : (
        renderImagem()
      )}
    </div>
  );
}

export default LogoParceiro;
