import styles from "./estilo.module.css";

import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IProject } from "../../types";

import ShareButton from "./shareButton";
import Editor, { type Monaco } from "@monaco-editor/react";
import type { editor } from "monaco-editor";

interface CodeAreaProps {
  project?: IProject;
  editable?: boolean;
}

const CodeEditor = ({ project, editable = true }: CodeAreaProps) => {
  const reduxSelectedLanguage = useSelector(
    (state: RootState) => state.selectedProject.language
  );
  const reduxSelectedCodeAreaColor = useSelector(
    (state: RootState) => state.selectedProject.backgroundColor
  );
  const reduxSelectedCode = useSelector(
    (state: RootState) => state.selectedProject.content
  );

  // Se o projeto não for passado, usa os valores do Redux
  const [code, setCode] = useState(project?.content || reduxSelectedCode);
  const codeAreaRef = useRef<HTMLDivElement>(null);

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
        style={{
          backgroundColor:
            project?.backgroundColor || reduxSelectedCodeAreaColor,
        }}
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
            {!editable && <div className={styles.editableBlockOverlay}></div>}
            <Editor
              language={project?.language || reduxSelectedLanguage}
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
