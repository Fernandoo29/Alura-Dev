import styles from "./estilo.module.css";

import TextInput from "../textInput";
import TextArea from "../textArea";

function ProjectForm() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.dadoProjeto}>
        <h2 className={styles.title}>SEU PROJETO</h2>
        <TextInput placeholder="Nome do seu projeto" />
        <TextArea placeholder="Descrição do seu projeto" />
      </div>
      <div className={styles.personalizacao}></div>
    </div>
  );
}

export default ProjectForm;
