import styles from "./estilo.module.css";

import TextInput from "../textInput";
import TextArea from "../textArea";
import Select from "../select";
import ColorInput from "../colorInput";
import LightButton from "../button/lightButtons";
import DarkButton from "../button/darkButton";

import { AiOutlineClear } from "react-icons/ai";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import {
  updateProjectContent,
  resetProject,
} from "../redux/features/selectedProjectSlice";
import Modal, { ModalRef } from "../modal";

const selectOpts: { label: string; value: string }[] = [
  { label: "JavaScript", value: "javascript" },
  { label: "HTML", value: "html" },
  { label: "CSS", value: "css" },
];

function ProjectForm() {
  const modalRef = useRef<ModalRef>(null);
  const dispatch = useDispatch<AppDispatch>();

  const project = useSelector((state: RootState) => state.selectedProject);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Agora você pode acessar o objeto completo do projeto para salvar
    console.log("Salvando projeto:", project);
    // Aqui você despacharia uma action para salvar `project` na sua API ou lista de projetos.
  };

  return (
    <>
      <Modal
        ref={modalRef}
        title="Limpar Projeto"
        message="Ao confirmar, todo o conteúdo do projeto será apagado. Deseja continuar?"
        onConfirm={() => dispatch(resetProject())}
      />
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.formArea}>
          <h2 className={styles.title}>SEU PROJETO</h2>
          <TextInput
            placeholder="Nome do seu projeto"
            value={project.title}
            onChange={(e) =>
              dispatch(
                updateProjectContent({ field: "title", value: e.target.value })
              )
            }
          />
          <TextArea
            placeholder="Descrição do seu projeto"
            value={project.description}
            onChange={(e) =>
              dispatch(
                updateProjectContent({
                  field: "description",
                  value: e.target.value,
                })
              )
            }
          />
        </div>
        <div className={`${styles.formArea} ${styles.personalizacao}`}>
          <h2 className={styles.title}>PERSONALIZAÇÃO</h2>
          <div className={`${styles.formArea} ${styles.personalizacaoInputs}`}>
            <Select
              value={project.language}
              onChange={(e) =>
                dispatch(
                  updateProjectContent({
                    field: "language",
                    value: e.target.value,
                  })
                )
              }
              options={selectOpts}
            />
            <ColorInput
              value={project.backgroundColor}
              onChange={(e) =>
                dispatch(
                  updateProjectContent({
                    field: "backgroundColor",
                    value: e.target.value,
                  })
                )
              }
            />
          </div>
        </div>
        <div className={styles.buttonsArea}>
          <LightButton type="submit" style={{ flex: "80%" }}>
            Salvar Projeto
          </LightButton>
          <DarkButton
            type="button"
            className={styles.cleanBtn}
            style={{ flex: "20%" }}
            onClick={() => modalRef.current?.open()}
          >
            <AiOutlineClear />
          </DarkButton>
        </div>
      </form>
    </>
  );
}

export default ProjectForm;
