import googleIcon from "../../../assets/google.svg";
import githubIcon from "../../../assets/github.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
const Login = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");

  const { signIn } = useContext(AuthContext); // Destructure the signUp function from the AuthContext
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((response) => {
        console.log(response.user);

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-80 md:w-96 p-4 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div>
              <h1></h1>
            </div>
            <h1 className="text-red-500">{error}</h1>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline">
                Sign In With Google{" "}
                <img className="w-8 ml-2" src={googleIcon} alt="" />
              </button>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline">
                Sign In With GITHUB{" "}
                <img className="w-8 ml-2" src={githubIcon} alt="" />
              </button>
            </div>
          </form>
          <div className="label">
            <p className="label">
              New to Banglar Cuisine?
              <Link to="/register" className="text-primary">
                Register now !
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
<img src={googleIcon} alt="" />;

export default Login;
