import styles from "./estilo.module.css";

import { FaCode } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import ItemNavegacao from "./itemNavegacao";

function MenuNavegacao() {
  return (
    <aside className={styles.menu}>
      <h2 className={styles.title}>MENU</h2>
      <nav>
        <ul>
          <ItemNavegacao
            isAtivo={true}
            icon={FaCode}
            label="Editor de código"
          />
          <ItemNavegacao icon={FaUsers} label="Comunidade" />
        </ul>
      </nav>
    </aside>
  );
}

export default MenuNavegacao;
