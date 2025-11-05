import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "./AuthProvider/AuthProvider";

const SignUP = () => {
  const { updateUserProfile, handleRegister, setUser } =
    useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");
    if (!name) {
      return setError("Name is required");
    }
    if (!email) {
      return setError("Email is required");
    }
    if (!password) {
      return setError("Password is required");
    }

    // Password validation
    if (!/[A-Z]/.test(password)) {
      return setError("Password must include at least one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      return setError("Password must include at least one lowercase letter");
    }
    if (password.length < 6) {
      return setError("Password must be at least 6 characters long");
    }

    handleRegister(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({
          displayName: name,
          photoURL: photo,
        }).then(() => {
        
          toast.success("Registration Successful!");
          navigate("/");
        });
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-10 bg-white p-6 shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>

      <form onSubmit={handleSignUp} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input input-bordered w-full"
        />

        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          className="input input-bordered w-full"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full"
        />

        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />
          <span
            className="absolute right-3 top-3 cursor-pointer"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button className="btn btn-primary w-full">Register</button>
      </form>

      <p className="text-center mt-3">
        Already have an account?
        <Link to="/login" className="text-blue-600 ml-1 font-semibold">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUP;
