import styles from "./Contato.module.css";
import FormContato from "../../components/forms/FormContato/FormContato";
import { useLocation } from "react-router-dom";

function Contato() {
  const location = useLocation();
  // console.log(location); 

  const { assuntoParceiro } = location.state || {}; // Desestruturação para pegar o valor do estado

  // console.log(assuntoParceiro); // Isso deve logar "parceiro", caso tenha vindo do link anterior

  return (
    <div className={styles.contato}>
      <section>
        <h1>Contato</h1>
        <FormContato assuntoParceiro={assuntoParceiro} />
        <div className={styles.texto}>
          <p>Telefone: (08) 3433-00X0</p>
          <p>Celular: (08) 990X0-11X1</p>
          <p>CNPJ: 000XX111/0001-01</p>
          <p>E-mail: institutofdantas@email.com</p>
          <p>Endereço: Rua Amélia Vieira, 387, Bairro São Roque - Cidadela - SC</p>
          <p>CEP: 888X0-000</p>
        </div>
      </section>
    </div>
  );
}

export default Contato;
