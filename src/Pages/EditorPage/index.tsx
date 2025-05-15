import styles from "./estilo.module.css";

import MenuNavegacao from "../../components/menuNavegacao";
import Header from "../../components/header";
import CodeArea from "../../components/codeArea";
import ProjectForm from "../../components/projectForm";

function EditorPage() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContainer}>
        <div className={styles.sides}>
          <MenuNavegacao />
        </div>
        <div className={styles.main}>
          <CodeArea />
        </div>
        <div className={styles.sides}>
          <ProjectForm />
        </div>
      </main>
    </div>
  );
}

export default EditorPage;
