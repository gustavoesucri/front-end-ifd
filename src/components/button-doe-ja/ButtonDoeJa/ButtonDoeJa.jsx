import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ButtonDoeJa.module.css";

function ButtonDoeJa() {
  const navigate = useNavigate(); // usar o hook do React Router

  const handleClick = () => {
    navigate("/doacoes"); // navega para a rota
  };

  return (
    <button className={styles.buttonDoeJa} onClick={handleClick}>
      <img
        src="/images-buttons/doeJaEscala250.png"
        alt="Botão verde escrito 'DOE JÁ' em branco e clique em preto com uma mão transparente clicando."
      />
    </button>
  );
}

export default ButtonDoeJa;
