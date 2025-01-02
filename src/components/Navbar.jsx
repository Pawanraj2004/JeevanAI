import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar" style={{ width: "100%" }}>
      <div className="navbar-logo">
      <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/no background.png" 
            alt="Jeevan AI Logo" 
            height={75} 
            className="h-12"
          />
        </Link>
        </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/detect">Detect</Link>
        </li>
        <li>
          <Link to="/diagnose">Diagnose</Link>
        </li>
        <li>
          <Link to="/ich">Interactive Symptom Checker</Link>
        </li>
        <li>
          <Link to="/quiz">Quiz</Link>
        </li>
      </ul>
      
      
    </nav>
  );
};

export default Navbar;
