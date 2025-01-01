import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar" style={{ width: "100%" }}>
      <div className="navbar-logo">
        <Link to="/">jeevanai</Link>
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
        <li>
          <Link to="/quiz">Quiz</Link>
        </li>
      </ul>
      
      
    </nav>
  );
};

export default Navbar;
