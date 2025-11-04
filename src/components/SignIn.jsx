import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";


const SignIn = () => {
  const { handleGoogleLogin, handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit =  (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.email.value;
    // setError("");
    handleLogin(email,password)
    .then(result=>{
      console(result.user)
      navigate("/")
    })
    .catch(error=>{
      console.log("ERROR", error.message)
    })
  };

  const handleGoogle =  () => {
    setError("");
    handleGoogleLogin()
    .then(result=>{
      console.log(result)
      navigate("/")
    })
    .catch(error =>{
      console.log(error)
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Discount PRO
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
            {error}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded focus:outline-none focus:ring"
          />
          <input
            name="password"
            type="password"
            placeholder="Password (min 6 chars)"
            className="w-full border p-3 rounded focus:outline-none focus:ring"
          />
          <button

            className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={handleGoogle}
            className="flex-1 border py-2 rounded flex items-center justify-center gap-2"
          >
            <img src="/google-icon.svg" alt="google" className="w-5 h-5" x />
            Continue with Google
          </button>
        </div>

        <div className="mt-4 text-center text-sm">
          <p>
            {" "}
            Don't have an account? <Link to="/register">Register</Link> "
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
