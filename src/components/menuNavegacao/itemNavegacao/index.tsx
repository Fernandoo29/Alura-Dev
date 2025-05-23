import styles from "./estilo.module.css";

import { IconType } from "react-icons";

interface ItemNavegacaoProps {
  icon: IconType;
  label: string;
  isAtivo?: boolean;
  className?: string;
}

function ItemNavegacao({
  icon: Icon,
  label,
  isAtivo,
  className,
}: ItemNavegacaoProps) {
  return (
    <li
      className={`${styles.item} ${isAtivo ? styles.ativo : ""} ${
        className ?? ""
      }`}
    >
      <Icon />
      <p>{label}</p>
    </li>
  );
}

export default ItemNavegacao;
