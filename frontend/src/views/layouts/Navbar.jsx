// src/views/components/Navbar.js
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
      <ul style={{ display: "flex", gap: "10px", listStyle: "none" }}>
        <li>
          <Link to="/"><i className="bi bi-house display-5 fw-bold">Inicio</i></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
