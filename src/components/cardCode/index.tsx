import styles from "./estilo.module.css";

import CodeArea from "../codeArea";
import { IProject } from "../../types";
import { FaComment } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import { ICodeArea } from "../../types";
import { useEffect, useRef } from "react";

interface Props {
  project: IProject;
}

function CardCode({ project }: Props) {
  const openOnEditor = (): void => {
    //salvar no redux o card a ser editado e redirecionar para a pagina de edição
    console.log("teste");
  };

  const codeAreaRef = useRef<ICodeArea>(null);

  useEffect(() => {
    codeAreaRef.current?.HighlightToggle();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.codeAreaContainer} onClick={openOnEditor}>
        <CodeArea
          selectedCodeAreaColorProp={project.backgroundColor}
          codeProp={project.content}
          selectedLanguageProp={project.language}
          editable={false}
          ref={codeAreaRef}
        />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <footer>
          <div className={styles.buttons}>
            <div className={styles.cardBtn}>
              <FaComment />
              {project.coments}
            </div>
            <div className={styles.cardBtn}>
              <MdFavorite />
              {project.like}
            </div>
          </div>

          <div className={styles.perfilContainer}>
            <div className={styles.molduraFoto}>
              <img src={project.user.image.foto} alt={project.user.image.alt} />
            </div>
            <p className={styles.nome}>{project.user.user}</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default CardCode;
