import styles from "./estilo.module.css";

import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { IProject } from "../../types";

import { updateProjectContent } from "../redux/features/selectedProjectSlice";
import ShareButton from "./shareButton";
import Editor, { type Monaco } from "@monaco-editor/react";
import type { editor } from "monaco-editor";

interface CodeAreaProps {
  project?: IProject;
  editable?: boolean;
}

const CodeEditor = ({ project, editable = true }: CodeAreaProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const reduxSelectedLanguage = useSelector(
    (state: RootState) => state.selectedProject.language
  );
  const reduxSelectedCodeAreaColor = useSelector(
    (state: RootState) => state.selectedProject.backgroundColor
  );
  const reduxSelectedCode = useSelector(
    (state: RootState) => state.selectedProject.content
  );

  const code = project?.content || reduxSelectedCode;
  const codeAreaRef = useRef<HTMLDivElement>(null);

  const handleCodeChange = (value: string | undefined) => {
    dispatch(updateProjectContent({ field: "content", value: value || "" }));
  };

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
              value={code}
              onChange={handleCodeChange}
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
