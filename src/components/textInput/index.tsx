import styles from "./estilo.module.css";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

function TextInput({ className, ...rest }: TextInputProps) {
  return <input className={`${styles.input} ${className ?? ""}`} {...rest} />;
}

export default TextInput;
