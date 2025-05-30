import styles from "./estilo.module.css";

import { useRef } from "react";

import MenuNavegacao from "../../components/menuNavegacao";
import Header from "../../components/header";
import CodeArea, { ICodeArea } from "../../components/codeArea";
import ProjectForm from "../../components/projectForm";
import DarkButton from "../../components/button/darkButton";

function EditorPage() {
  const CodeAreaRef = useRef<ICodeArea>(null);

  const handleHighlightBtnClick: () => void = () => {
    CodeAreaRef.current?.HighlightToggle();
  };

  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContainer}>
        <div className={styles.sides}>
          <MenuNavegacao />
        </div>
        <div className={`${styles.main} ${styles.codeAreaContainer}`}>
          <CodeArea ref={CodeAreaRef} />
          <DarkButton onClick={handleHighlightBtnClick}>
            Visualizar com o highlight
          </DarkButton>
        </div>
        <div className={styles.sides}>
          <ProjectForm />
        </div>
      </main>
    </div>
  );
}

export default EditorPage;
