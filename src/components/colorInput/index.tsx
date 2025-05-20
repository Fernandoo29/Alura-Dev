import styles from "./estilo.module.css";

interface ColorInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

function ColorInput({ className, ...rest }: ColorInputProps) {
  return (
    <input
      type="color"
      className={`${styles.colorInput} ${className ?? ""}`}
      {...rest}
    />
  );
}

export default ColorInput;
