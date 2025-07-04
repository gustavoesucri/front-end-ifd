import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <button onClick={handleLogout} style={{ cursor: "pointer" }}>
      Logout
    </button>
  );
}
