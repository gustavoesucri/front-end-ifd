import LogoutButton from "../../components/login/LogoutButton";

function AdminDashboard() {
  return (
    <div>
      <h1>Dashboard do Admin</h1>
      <p>Bem-vindo ao painel administrativo!</p>
      <p>COLOCAR AQUI OS COMPONENTES QUE FAÇAM MODIFICAÇÕES NOS DADOS DO BD COM O TOKEN.</p>
      <LogoutButton />
    </div>
  );
}

export default AdminDashboard;
