import styles from "./estilo.module.css";

import { IProject } from "../../types";
import { FaComment } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import CodeEditor from "../codeEditor";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedProject } from "../redux/features/selectedProjectSlice";

interface Props {
  project: IProject;
}

function CardCode({ project }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openOnEditor = (): void => {
    dispatch(setSelectedProject(project));
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.codeAreaContainer} onClick={openOnEditor}>
        <CodeEditor project={project} editable={false} />
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
