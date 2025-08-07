import styles from "./estilo.module.css";

import CardCode from "../../components/cardCode";
import Header from "../../components/header";
import MenuNavegacao from "../../components/menuNavegacao";

import { CommunityProjects } from "../../MockData/communityProjects";

function ComunidadePage() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContainer}>
        <div className={styles.sides}>
          <MenuNavegacao />
        </div>
        <div className={styles.main}>
          {CommunityProjects.map((project) => (
            <CardCode key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default ComunidadePage;
