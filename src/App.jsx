import "./App.css";
import Header from "./components/header/Header/Header";
import Home from "./pages/home/Home";
import Projetos from "./pages/projetos/Projetos";
import Campanhas from "./pages/campanhas/Campanhas";
import Noticias from "./pages/noticias/Noticias";
import Parceiros from "./pages/parceiros/Parceiros";
import Doacoes from "./pages/doacoes/Doacoes";
import Contato from "./pages/contato/Contato";
import Footer from "./components/footer/Footer/Footer";
import { Routes, Route } from "react-router-dom"; // Importe useLocation aqui
import ProjetoDetalhado from "./pages/projetos/ProjetoDetalhado";
import NoticiaDetalhada from "./pages/noticias/NoticiaDetalhada";
import CampanhaDetalhada from "./pages/campanhas/CampanhaDetalhada";
import Login from "./components/login/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/projetos/:slug" element={<ProjetoDetalhado />} />
        <Route path="/campanhas" element={<Campanhas />} />
        <Route path="/campanhas/:slug" element={<CampanhaDetalhada />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticias/:slug" element={<NoticiaDetalhada />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/doacoes" element={<Doacoes />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Login />} />
        <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
