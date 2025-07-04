import { Link } from "react-router-dom";
import LogoutButton from "../../components/login/LogoutButton";
import styles from "./AdminDashboard.module.css"

function AdminDashboard() {
  return (
    <div>
      <h1>Dashboard do Admin</h1>
      <p>Bem-vindo ao painel administrativo!</p>
      <p>
        COLOCAR AQUI OS COMPONENTES QUE FAÇAM MODIFICAÇÕES NOS DADOS DO BD COM O
        TOKEN.
      </p>
      <nav className={styles.links}>
        <Link to="/admin/projetos">Gerenciar Projetos</Link>
      </nav>
      <LogoutButton />
    </div>
  );
}

export default AdminDashboard;
