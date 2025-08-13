import styles from "./estilo.module.css";

// import html2canvas from "html2canvas";
// import { toPng, toJpeg, toSvg } from "html-to-image";
// import { LuImageDown } from "react-icons/lu";

import { ICodeArea } from "../../types";

import {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  // useEffect,
} from "react";

import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

import hljs from "highlight.js";
// import "../../styles/highlight/agate.css";
import ShareButton from "./shareButton";

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
  const INITIAL_CODE = `function hello() {\n  console.log("hi1");\n}`;
  const [code] = useState(codeProp ? codeProp : INITIAL_CODE);

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
  const codeAreaRef = useRef<HTMLDivElement>(null);

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
      ref={codeAreaRef}
    >
      <div className={styles.codeAreaContainer}>
        <div className={styles.macFakeInterface}>
          <div className={styles.dots}>
            <div className={`${styles.circulo} ${styles.circuloVermelho}`} />
            <div className={`${styles.circulo} ${styles.circuloAmarelo}`} />
            <div className={`${styles.circulo} ${styles.circuloVerde}`} />
          </div>
          <div className={styles.shareImgBtnContainer}>
            <ShareButton codeAreaRef={codeAreaRef} />
          </div>
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
