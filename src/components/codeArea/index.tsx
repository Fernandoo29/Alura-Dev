import styles from "./estilo.module.css";

import { useRef, useState, forwardRef, useImperativeHandle } from "react";

import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

import hljs from "highlight.js";
import "highlight.js/styles/agate.css";

export interface ICodeArea {
  HighlightToggle: () => void;
}

function CodeArea(_, ref: React.Ref<ICodeArea>) {
  const [code, setCode] = useState(
    `function hello() {\n  console.log("hi");\n}`
  );
  const codeRef = useRef<HTMLElement>(null);
  const selectedLanguage = useSelector(
    (state: RootState) => state.selectLanguage.value
  );
  const selectedCodeAreaColor = useSelector(
    (state: RootState) => state.selectCodeAreaColor.value
  );

  useImperativeHandle(ref, () => ({
    HighlightToggle() {
      if (codeRef.current) {
        console.log("teste");
        codeRef.current.removeAttribute("data-highlighted");
        hljs.highlightElement(codeRef.current);
      }
    },
  }));

  return (
    <div
      style={{ backgroundColor: selectedCodeAreaColor }}
      className={styles.container}
    >
      <div className={styles.codeAreaContainer}>
        <div className={styles.macFakeInterface}>
          <div className={`${styles.circulo} ${styles.circuloVermelho}`} />
          <div className={`${styles.circulo} ${styles.circuloAmarelo}`} />
          <div className={`${styles.circulo} ${styles.circuloVerde}`} />
        </div>
        <div className={styles.codeWrapper}>
          <code
            contentEditable="true"
            className={`${styles.codeArea} hljs language-${selectedLanguage}`}
            ref={codeRef}
          >
            {code}
          </code>
        </div>
      </div>
    </div>
  );
}

export default forwardRef<ICodeArea>(CodeArea);
