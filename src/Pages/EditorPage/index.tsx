import styles from "./estilo.module.css";

import MenuNavegacao from "../../components/menuNavegacao";
import Header from "../../components/header";
import ProjectForm from "../../components/projectForm";
import CodeEditor from "../../components/codeEditor";

function EditorPage() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContainer}>
        <div className={styles.sides}>
          <MenuNavegacao />
        </div>
        <div className={`${styles.main} ${styles.codeAreaContainer}`}>
          <CodeEditor />
        </div>
        <div className={styles.sides}>
          <ProjectForm />
        </div>
      </main>
    </div>
  );
}

export default EditorPage;
