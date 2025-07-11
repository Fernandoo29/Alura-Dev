import styles from "./estilo.module.css";

import { useNavigate } from "react-router-dom";

import { TiThMenu } from "react-icons/ti";

import aluraDevLogo from "./aluraDevLogo.png";

import TextInput from "../../components/textInput";
import Perfil from "./perfil";
import ItemNavegacao from "../menuNavegacao/itemNavegacao";
import { URLS } from "../../Routes";
import { FaCode, FaUsers } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();

  const [showFlotingMenu, setShowFlotingMenu] = useState(false);

  const menuFlutuanteToggle = () => {
    setShowFlotingMenu(!showFlotingMenu);
  };

  return (
    <header className={styles.header}>
      <div className={styles.sides}>
        <img
          className={styles.logo}
          src={aluraDevLogo}
          alt="Logo do Alura Dev"
        />
      </div>
      <div className={styles.main}>
        <TextInput placeholder="Busque por algo" />
      </div>
      <div className={styles.sides} style={{ alignContent: "center" }}>
        <Perfil />
      </div>
      <div
        className={`${styles.sides} ${styles.floatingMenuBtn}`}
        style={{ alignContent: "center" }}
      >
        <TiThMenu onClick={menuFlutuanteToggle} />
      </div>
      {showFlotingMenu && (
        <div className={styles.menuFlutuante}>
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
        </div>
      )}
    </header>
  );
}

export default Header;
