import React, { useState } from "react";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  // Moved handleClickLogin inside the component and fixed variable scoping
  const handleClickLogin = async (event) => {
    event.preventDefault(); 
    try {
      const response = await axios.post("http://localhost:8000/api/v2/user/login-user",{ email, password });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-12">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Sign in to your account
          </h2>
        </div>
        <form className="space-y-6" onSubmit={handleClickLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1 relative">
              <input
                type={visible ? "text" : "password"}
                name="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
              {visible ? (
                <AiOutlineEye
                  className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(true)}
                />
              )}
            </div>
          </div>
          {/* Commented out the styles.normaFlex as it is undefined */}
          {/* <div className={`${styles.normaFlex} justify-between`}> */}
          <div className="flex justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember-me"
                id="remember-me"
                className="block"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href=".forgot-password"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Sign In
            </button>
          </div>
          {/* Commented out the styles.normaFlex and incorrect link */}
          {/* <div className={`${styles.normaFlex} w-full`}> */}
          <div className="flex justify-center w-full">
            <h4>Don't have an account?</h4>
            <Link to="/signup" className="text-blue-600 pl-2">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
