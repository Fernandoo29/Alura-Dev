import styles from "./estilo.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}

function DarkButton({ className, children, ...rest }: ButtonProps) {
  return (
    <button
      className={`${className ?? ""} ${styles.buttonContainer}`}
      {...rest}
    >
      {children ?? ""}
    </button>
  );
}

export default DarkButton;
