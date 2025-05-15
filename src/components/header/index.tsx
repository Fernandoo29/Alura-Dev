import styles from "./estilo.module.css";

import aluraDevLogo from "./aluraDevLogo.png";

import TextInput from "../../components/textInput";
import Perfil from "../../components/perfil";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.sides}>
        <img src={aluraDevLogo} alt="Logo do Alura Dev" />
      </div>
      <div className={styles.main}>
        <TextInput placeholder="Busque por algo" className={styles.input} />
      </div>
      <div className={styles.sides}>
        <Perfil className={styles.perfil} />
      </div>
    </header>
  );
}

export default Header;
