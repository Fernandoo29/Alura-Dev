import styles from "./estilo.module.css";
import foto from "./mock_perfil_foto.jpg";

interface MockUser {
  name: string;
  image: {
    foto: string;
    alt: string;
  };
}

interface PerfilProps {
  className?: string;
}

function Perfil({ className }: PerfilProps) {
  const mockUserData: MockUser = {
    name: "Harry",
    image: {
      foto: foto,
      alt: "Foto de perfil do usuário",
    },
  };

  return (
    <div className={`${styles.container} ${className ?? ""}`}>
      <div className={styles.molduraFoto}>
        <img src={mockUserData.image.foto} alt={mockUserData.image.alt} />
      </div>
      <p className={styles.nome}>{mockUserData.name}</p>
    </div>
  );
}

export default Perfil;
