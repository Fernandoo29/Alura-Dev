import styles from "./estilo.module.css";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

function TextArea({ className, ...rest }: TextAreaProps) {
  return (
    <textarea className={`${styles.textarea} ${className ?? ""}`} {...rest} />
  );
}

export default TextArea;
