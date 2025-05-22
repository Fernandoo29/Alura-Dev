import styles from "./estilo.module.css";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

function CodeArea({ className, ...rest }: TextAreaProps) {
  return (
    <div className={styles.container}>
      <div className={styles.codeAreaContainer}>
        <div className={styles.macFakeInterface}>
          <div className={`${styles.circulo} ${styles.circuloVermelho}`} />
          <div className={`${styles.circulo} ${styles.circuloAmarelo}`} />
          <div className={`${styles.circulo} ${styles.circuloVerde}`} />
        </div>
        <textarea
          className={`${styles.codeArea} ${className ?? ""}`}
          {...rest}
        />
      </div>
    </div>
  );
}

export default CodeArea;
