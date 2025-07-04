import { Navigate } from "react-router-dom";

// Verifica se o token JWT está salvo no localStorage
function isAuthenticated() {
  return !!localStorage.getItem("token");
}

// Componente para proteger as rotas que precisam estar logadas
export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    // Se não está logado, redireciona para login
    return <Navigate to="/login" replace />;
  }
  return children;
}
