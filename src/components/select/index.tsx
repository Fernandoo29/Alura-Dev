import styles from "./estilo.module.css";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options: { label: string; value: string }[];
}

function Select({ className, options, ...rest }: SelectProps) {
  return (
    <select className={`${className ?? ""} ${styles.select}`} {...rest}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
