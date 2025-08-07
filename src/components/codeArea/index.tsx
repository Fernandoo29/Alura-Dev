import styles from "./estilo.module.css";

import { ICodeArea } from "../../types";

import {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";

import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

import hljs from "highlight.js";
import "highlight.js/styles/agate.css";

interface CodeAreaProps {
  selectedCodeAreaColorProp?: string;
  selectedLanguageProp?: string;
  codeProp?: string;
  editable?: boolean;
}

function CodeArea(
  {
    selectedCodeAreaColorProp = "",
    selectedLanguageProp = "",
    codeProp = "",
    editable = true,
  }: CodeAreaProps,
  ref: React.Ref<ICodeArea>
) {
  const INITIAL_CODE = `function hello() {  console.log("hi");}`;
  const [code, setCode] = useState(codeProp ? codeProp : INITIAL_CODE);

  const reduxSelectedLanguage = useSelector(
    (state: RootState) => state.selectLanguage.value
  );
  const selectedLanguage = selectedLanguageProp
    ? selectedLanguageProp
    : reduxSelectedLanguage;

  const reduxSelectedCodeAreaColor = useSelector(
    (state: RootState) => state.selectCodeAreaColor.value
  );
  const selectedCodeAreaColor = selectedCodeAreaColorProp
    ? selectedCodeAreaColorProp
    : reduxSelectedCodeAreaColor;

  const codeRef = useRef<HTMLElement>(null);

  // useEffect(() => {
  //   if (codeRef.current) {
  //     codeRef.current.innerText = code;
  //   }
  // }, []);

  useImperativeHandle(ref, () => ({
    HighlightToggle() {
      if (codeRef.current) {
        codeRef.current.removeAttribute("data-highlighted");
        hljs.highlightElement(codeRef.current);
      }
    },
  }));

  // const handleInput = () => {
  //   const newValue = codeRef.current?.innerText ?? "";
  //   setCode(newValue);
  // };

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
          <pre>
            <code
              contentEditable={editable}
              suppressContentEditableWarning
              // onInput={handleInput}
              className={`${styles.codeArea} hljs language-${selectedLanguage}`}
              ref={codeRef}
            >
              {code}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default forwardRef<ICodeArea, CodeAreaProps>(CodeArea);
