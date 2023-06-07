import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sm:flex justify-between text-center">
      <div>
      <Link to='/'>Banglar Cuisine</Link>
      </div>
      <nav className="flex justify-evenly sm:gap-4">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Navbar;
