import styles from "./estilo.module.css";
import aluraDevLogo from "./aluraDevLogo.png";

import TextInput from "../../components/textInput";
import Perfil from "../../components/perfil";

function EditorPage() {
  return (
    <main className={styles.mainContainer}>
      <header className={styles.header}>
        <img src={aluraDevLogo} alt="Logo do Alura Dev" />
        <TextInput placeholder="Busque por algo" />
        <Perfil />
      </header>
    </main>
  );
}

export default EditorPage;
