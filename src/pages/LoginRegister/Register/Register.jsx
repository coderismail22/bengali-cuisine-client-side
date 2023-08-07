import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext); // Destructure the signUp function from the AuthContext
  const [error, setError] = useState("");

  
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const photo = form.photo.value;
    console.log(name, email, password, confirm, photo);
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        return updateProfile(user, {
          displayName: name, // Set the user's display name (username)
          photoURL: photo, // Set the user's photo URL
        });
      })
      .then(() => {
        console.log("User registered:", email);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registration</h1>
        </div>
        <div className="card flex-shrink-0 w-80 md:w-96 p-4 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered"
                name="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
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
                placeholder="Password"
                className="input input-bordered"
                name="password"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                name="confirm"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Photo</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                name="photo"
              />
            </div>
            <div>
              <h1></h1>
            </div>
            <h1 className="text-red-500">{error}</h1>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="label">
            <p className="label">
              Already have an account?
              <Link to="/login" className="text-primary">
                Login.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
