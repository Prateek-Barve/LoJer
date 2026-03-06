import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">LoJer</div>

      <div className="navbar-links">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Your Whinings
        </Link>

        <Link
          to="/create"
          className={location.pathname === "/create" ? "active" : ""}
        >
          Shit here!
        </Link>
      </div>
    </nav>
  );
}