import styles from "./estilo.module.css";
import { mockUser } from "../../../MockData/user";

interface PerfilProps {
  className?: string;
}

function Perfil({ className }: PerfilProps) {
  return (
    <div className={`${styles.container} ${className ?? ""}`}>
      <div className={styles.molduraFoto}>
        <img src={mockUser.image.foto} alt={mockUser.image.alt} />
      </div>
      <p className={styles.nome}>{mockUser.name}</p>
    </div>
  );
}

export default Perfil;
