import styles from "./estilo.module.css";

import TextInput from "../textInput";

function ProjectForm() {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>SEU PROJETO</h2>
      <TextInput placeholder="Nome do seu projeto" className={styles.input} />
    </div>
  );
}

export default ProjectForm;
