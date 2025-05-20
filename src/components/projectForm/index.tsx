import styles from "./estilo.module.css";

import TextInput from "../textInput";
import TextArea from "../textArea";
import Select from "../select";
import ColorInput from "../colorInput";

function ProjectForm() {
  const selectOpts: { label: string; value: string }[] = [
    { label: "Valor1", value: "v1" },
    { label: "Valor2", value: "v2" },
    { label: "Valor3", value: "v3" },
  ];

  return (
    <div className={styles.formContainer}>
      <div className={styles.formArea}>
        <h2 className={styles.title}>SEU PROJETO</h2>
        <TextInput placeholder="Nome do seu projeto" />
        <TextArea placeholder="Descrição do seu projeto" />
      </div>
      <div className={`${styles.formArea} ${styles.personalizacao}`}>
        <h2 className={styles.title}>PERSONALIZAÇÃO</h2>
        <Select options={selectOpts} />
        <ColorInput />
      </div>
    </div>
  );
}

export default ProjectForm;
