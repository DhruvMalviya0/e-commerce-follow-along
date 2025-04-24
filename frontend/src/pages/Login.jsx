import { useState } from "react";
import axios from "../axiosConfig";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {useDispatch} from "react-redux";
import { setemail } from "@/store/userAction";

axios.defaults.withCredentials = true;

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [error, setError] = useState("");

    const handleClickLogin = async (event) => {
      event.preventDefault();
      setError("");

      try {
        const response = await axios.post("/api/v2/user/login-user", {
          email,
          password
        });
        
        if (response.data && response.data.success) {
          dispatch(setemail(email));
          navigate("/");
        } else {
          setError(response.data?.message || "Login failed");
        }
      } catch (error) {
        console.error("Login error:", error);
        setError(error.response?.data?.message || "Login failed. Please try again.");
      }
    };

    return (
        <div
            className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-12">
          <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-lg">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">Sign in to your account</h2>
            </div>

            {/* Login Form */}
            <form className="space-y-6" onSubmit={handleClickLogin}>
              {/* Error Message */}
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
              
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    id="password"
                    name="password"
                    type={visible ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setVisible(!visible)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {visible ? (
                      <AiOutlineEyeInvisible className="h-5 w-5 text-gray-400" />
                    ) : (
                      <AiOutlineEye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign in
                </button>
              </div>
            </form>

            {/* Sign Up Link */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
    );
}

export default Login;