import styles from "./estilo.module.css";

import { useNavigate, useLocation } from "react-router-dom";

import { FaCode } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import ItemNavegacao from "./itemNavegacao";

import { URLS } from "../../Routes";

function MenuNavegacao() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className={styles.menu}>
      <h2 className={styles.title}>MENU</h2>
      <nav>
        <ul>
          <ItemNavegacao
            isAtivo={location.pathname == URLS.EDITOR ? true : false}
            icon={FaCode}
            label="Editor de código"
            onClick={() => navigate(URLS.EDITOR)}
          />
          <ItemNavegacao
            isAtivo={location.pathname == URLS.COMUNIDADE ? true : false}
            icon={FaUsers}
            label="Comunidade"
            onClick={() => navigate(URLS.COMUNIDADE)}
          />
        </ul>
      </nav>
    </aside>
  );
}

export default MenuNavegacao;
