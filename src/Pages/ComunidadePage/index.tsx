import Header from "../../components/header";
import MenuNavegacao from "../../components/menuNavegacao";
import styles from "./estilo.module.css";

function ComunidadePage() {
  return (
    <>
      <div className={styles.sides}>
        <Header />
        <MenuNavegacao />
      </div>
    </>
  );
}

export default ComunidadePage;
