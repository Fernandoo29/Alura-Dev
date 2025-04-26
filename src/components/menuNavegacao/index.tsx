import styles from "./estilo.module.css";

import { FaCode } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

function MenuNavegacao() {
  return (
    <aside className={styles.menu}>
      <h2 className={styles.title}>MENU</h2>
      <nav>
        <ul>
          <li className={styles.item}>
            <FaCode />
            <p>Editor de código</p>
          </li>
          <li className={`${styles.item} ${styles.ativo}`}>
            <FaUsers />
            <p>Comunidade</p>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default MenuNavegacao;
