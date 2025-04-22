import styles from "./estilo.module.css";

interface TextInputProps {
  name?: string;
  id?: string;
  placeholder?: string;
  value?: string;
  style?: React.CSSProperties;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextInput({
  name,
  id,
  placeholder,
  value,
  style,
  onChange,
}: TextInputProps) {
  return (
    <input
      className={styles.input}
      style={style}
      type="text"
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextInput;
