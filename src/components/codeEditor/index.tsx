import styles from "./estilo.module.css";

import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import ShareButton from "./shareButton";
import Editor, { type Monaco } from "@monaco-editor/react";
import type { editor } from "monaco-editor";

interface CodeAreaProps {
  selectedCodeAreaColorProp?: string;
  selectedLanguageProp?: string;
  codeProp?: string;
  editable?: boolean;
}

const CodeEditor = ({
  selectedCodeAreaColorProp = "",
  selectedLanguageProp = "",
  codeProp = "",
  editable = true,
}: CodeAreaProps) => {
  const INITIAL_CODE = `function hello() {\n  console.log("hi1");\n}`;
  const [code, setCode] = useState(codeProp ? codeProp : INITIAL_CODE);
  const codeAreaRef = useRef<HTMLDivElement>(null);

  /* This code snippet is using the `useSelector` hook from React Redux to access the `selectLanguage`
 value from the Redux store. */
  const reduxSelectedLanguage = useSelector(
    (state: RootState) => state.selectLanguage.value
  );

  const selectedLanguage = selectedLanguageProp
    ? selectedLanguageProp
    : reduxSelectedLanguage;

  /* This code snippet is using the `useSelector` hook from React Redux to access the `selectCodeAreaColor` 
  value from the Redux store.*/
  const reduxSelectedCodeAreaColor = useSelector(
    (state: RootState) => state.selectCodeAreaColor.value
  );
  const selectedCodeAreaColor = selectedCodeAreaColorProp
    ? selectedCodeAreaColorProp
    : reduxSelectedCodeAreaColor;

  function handleEditorMount(
    _editor: editor.IStandaloneCodeEditor,
    monaco: Monaco
  ) {
    // Define um tema customizado
    monaco.editor.defineTheme("customTheme", {
      base: "vs-dark", // herda estilos do tema escuro
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#141414", // fundo
      },
    });

    // Aplica o tema
    monaco.editor.setTheme("customTheme");
  }

  return (
    <div className={styles.codeEditorContainer}>
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
            <Editor
              language={selectedLanguage}
              defaultValue={code}
              onChange={(value) => setCode(value || "")}
              onMount={handleEditorMount}
              options={{
                fontSize: 17,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                wordWrap: "on",
                wrappingIndent: "indent",
                lineNumbers: "off",
                glyphMargin: false,
                folding: false,
                lineDecorationsWidth: 0,
                lineNumbersMinChars: 0,
                renderLineHighlight: "none",
                readOnly: !editable,
                guides: { indentation: false },
                overviewRulerLanes: 0,
                overviewRulerBorder: false,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
