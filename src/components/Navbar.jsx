import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove token
    navigate("/");                    // redirect to login page
  };

  return (
    <nav className="navbar">
      {/* Left Side - App Name */}
      <div className="navbar-left">
        Task Tracker
      </div>

      {/* Center - Dashboard */}
      <div className="navbar-center">
        {isLoggedIn && <Link to="/dashboard" className="nav-link">Dashboard</Link>}
      </div>

      {/* Right Side - Signup and Login or Logout */}
      <div className="navbar-right">
        {isLoggedIn ? (
          <button className="nav-link logout-button" onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link to="/signup" className="nav-link">Signup</Link>
            <Link to="/" className="nav-link">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
