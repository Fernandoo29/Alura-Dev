import styles from "./estilo.module.css";

import { IconType } from "react-icons";

interface ItemNavegacaoProps {
  icon: IconType;
  label: string;
  isAtivo?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

function ItemNavegacao({
  icon: Icon,
  label,
  isAtivo,
  className,
  onClick,
}: ItemNavegacaoProps) {
  return (
    <li
      tabIndex={0}
      className={`${styles.item} ${isAtivo ? styles.ativo : ""} ${
        className ?? ""
      }`}
      onClick={onClick}
    >
      <Icon />
      <p>{label}</p>
    </li>
  );
}

export default ItemNavegacao;
