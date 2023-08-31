import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import "./active-link.css";
import foodImg from "../../../../public/food.svg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.photoURL, user?.photoURL);
  return (
<div className="mb-2">
<div className="sm:flex justify-between items-center text-center text-2xl ">
      <div className="flex items-center justify-center">
        <div>
          <img className="w-12 " src={foodImg} alt="foodImg" />
        </div>
        <div>
          <Link className="font-bold" to="/">
            Banglar Cuisine
          </Link>
        </div>
      </div>
      <nav className="flex justify-evenly sm:gap-4" id="activeRoute">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        {user ? (
          <>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  loading="lazy"
                  title={user?.displayName}
                  src={user?.photoURL}
                />
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
    <hr />
</div>
  );
};

export default Navbar;
