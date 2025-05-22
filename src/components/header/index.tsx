import styles from "./estilo.module.css";

import aluraDevLogo from "./aluraDevLogo.png";

import TextInput from "../../components/textInput";
import Perfil from "../../components/perfil";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.sides}>
        <img
          className={styles.logo}
          src={aluraDevLogo}
          alt="Logo do Alura Dev"
        />
      </div>
      <div className={styles.main}>
        <TextInput placeholder="Busque por algo" />
      </div>
      <div className={styles.sides} style={{ alignContent: "center" }}>
        <Perfil />
      </div>
    </header>
  );
}

export default Header;
