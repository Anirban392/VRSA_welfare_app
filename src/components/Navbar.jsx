import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">
        
        <img src={logo} alt="NGO Logo" />
        <div className="line"></div>
         <h2>Voice For Research in
         Social Administration</h2>
      </div>
   
      

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/work">Our Work</Link>
        <Link to="/campaigns">Campaigns</Link>
      </div>

      <button onClick={() => navigate("/contact")}>
        Contact
      </button>
    </nav>
  );
};

export default Navbar;