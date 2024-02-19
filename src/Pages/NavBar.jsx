import { Link, NavLink } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default NavBar;
