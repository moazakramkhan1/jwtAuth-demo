import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      navigate("/login");
    } catch (error) {
      console.error("Failed to fetch", error);
    }
  };

  return (
    <div className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link onClick={logout}>Logout</Link>
    </div>
  );
};