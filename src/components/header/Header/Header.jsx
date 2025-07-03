import NameHeader from "../NameHeader/NameHeader";
import LogoHeader from "../LogoHeader/LogoHeader";
import styles from "./Header.module.css";
import foto from "../../../../images/Foto-fundo-teste.jpg";
import Navigator from "../Navigator/Navigator";
import ButtonDoeJa from "../../button-doe-ja/ButtonDoeJa/ButtonDoeJa";

function Header() {
  return (
    <header>
      <div className={styles.mainHeader}>
        <div className={styles.topRow}>
          <LogoHeader />
          <NameHeader />
        </div>
      </div>
      <div className={styles.blocoimagem}>
        <Navigator />
        <img src={foto} alt="Foto com várias pessoas" className={styles.foto} />
        <ButtonDoeJa />
      </div>
    </header>
  );
}

export default Header;
