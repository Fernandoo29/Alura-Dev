import styles from "./estilo.module.css";

import TextInput from "../textInput";
import TextArea from "../textArea";
import Select from "../select";
import ColorInput from "../colorInput";
import LightButton from "../button/lightButtons";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { setLanguage } from "../redux/features/selectedLanguageSlice";
import { setCodeAreaColor } from "../redux/features/selectedCodeAreaColorSlice";

function ProjectForm() {
  const dispatch = useDispatch<AppDispatch>();
  const selectedCodeAreaColor = useSelector(
    (state: RootState) => state.selectCodeAreaColor.value
  );
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
        <Select
          onChange={(e) => dispatch(setLanguage(e.target.value))}
          options={selectOpts}
        />
        <ColorInput
          value={selectedCodeAreaColor}
          onChange={(e) => dispatch(setCodeAreaColor(e.target.value))}
        />
      </div>
      <LightButton>Salvar projeto</LightButton>
    </form>
  );
}

export default ProjectForm;
