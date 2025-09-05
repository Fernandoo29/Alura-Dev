import styles from "./estilo.module.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { TiThMenu } from "react-icons/ti";
import { FaCode, FaUsers } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

import aluraDevLogo from "./aluraDevLogo.png";

import TextInput from "../../components/textInput";
import Perfil from "./perfil";
import ItemNavegacao from "../menuNavegacao/itemNavegacao";
import { URLS } from "../../Routes";

function Header() {
  const navigate = useNavigate();

  const [showFlotingMenu, setShowFlotingMenu] = useState(false);
  const [showSearchBarMobile, setShowSearchBarMobile] = useState(false);

  const menuFlutuanteToggle = () => {
    setShowFlotingMenu(!showFlotingMenu);
  };

  const searchBarMobileToggle = () => {
    setShowSearchBarMobile(!showSearchBarMobile);

    if (showFlotingMenu) setShowFlotingMenu(false);
  };

  return (
    <header className={styles.header}>
      {!showSearchBarMobile ? (
        <>
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
            <FaSearch onClick={searchBarMobileToggle} />
          </div>
          <div
            className={`${styles.sides} ${styles.floatingMenuBtn}`}
            style={{ alignContent: "center" }}
          >
            {!showFlotingMenu ? (
              <TiThMenu onClick={menuFlutuanteToggle} />
            ) : (
              <FaXmark onClick={menuFlutuanteToggle} />
            )}
          </div>
        </>
      ) : (
        <div className={styles.searchBarMobile}>
          <div className={styles.main}>
            <TextInput placeholder="Busque por algo" />
          </div>
          <div
            className={`${styles.sides} ${styles.floatingMenuBtn}`}
            style={{ alignContent: "center" }}
          >
            <FaXmark onClick={searchBarMobileToggle} />
          </div>
        </div>
      )}
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
          <hr />
          <div className={styles.floatingMenuPerfil}>
            <Perfil />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
