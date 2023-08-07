import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import "./active-link.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.photoURL,user?.photoURL)
  return (
    <div className="sm:flex justify-between text-center text-2xl ">
      <div>
        <Link to="/">Banglar Cuisine</Link>
      </div>
      <nav className="flex justify-evenly sm:gap-4" id="activeRoute">
        <NavLink
          to="/"
        >
          Home
        </NavLink>
        <NavLink to="/blog">Blog</NavLink>
        {user ? (
<>
<div className="avatar">
  <div className="w-10 rounded-full">
    <img loading="lazy" title={user?.displayName} src={user?.photoURL} />
  </div>
</div>
<button onClick={logOut}>Logout</button>
</>          
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
