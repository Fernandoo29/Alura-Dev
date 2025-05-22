import styles from "./estilo.module.css";

import TextInput from "../textInput";
import TextArea from "../textArea";
import Select from "../select";
import ColorInput from "../colorInput";
import LightButton from "../button/lightButtons";

function ProjectForm() {
  const selectOpts: { label: string; value: string }[] = [
    { label: "JavaScript", value: "javascript" },
    { label: "HTML", value: "html" },
    { label: "CSS", value: "css" },
  ];

  return (
    <form className={styles.formContainer}>
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
      <LightButton>Salvar projeto</LightButton>
    </form>
  );
}

export default ProjectForm;
