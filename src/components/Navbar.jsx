import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">HealthAI</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <Link to="/detect">Detect</Link>
        </li>
        <li>
          <Link to="/diagnose">Diagnose</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
