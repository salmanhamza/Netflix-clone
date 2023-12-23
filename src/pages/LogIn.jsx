import React, { useState } from "react";
import netflix from "../assets/images/netflix.png";

const LogIn = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    // Implement your login logic here
    console.log("SignUp clicked with data:", formData);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="signin-container md:px-0 px-[20px]">
      <div className="overlay">
        {/* navbar */}
        <header className={`md:px-44 px-4  fixed top-0 left-0 w-full`}>
          <nav className="flex justify-between items-center ">
            <img className="md:h-[100px] h-[60px]" src={netflix} alt="logo" />
          </nav>
        </header>

        {/* login & signup card */}
        {isLogin ? (
          <>
            <div className="flex items-center justify-center min-h-screen ">
              <div className="w-full max-w-md p-8 bg-black bg-opacity-80 rounded-md shadow-md text-white">
                <h2 className="text-3xl font-extrabold mb-6 text-center">
                  Sign In
                </h2>

                <form>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none"
                    />
                  </div>

                  <div className="mb-6">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleLogin}
                    className="w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
                  >
                    Sign In
                  </button>
                </form>
                <p className="text-center mt-4">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    className="text-blue-500 underline focus:outline-none"
                    onClick={toggleForm}
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-center min-h-screen ">
              <div className="w-full max-w-md p-8 bg-black bg-opacity-80 rounded-md shadow-md text-white">
                <h2 className="text-3xl font-extrabold mb-6 text-center">
                  Sign Up
                </h2>

                <form>
                  <div className="mb-4">
                    <input
                      type="name"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none"
                    />
                  </div>

                  <div className="mb-6">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confrim Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleLogin}
                    className="w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
                  >
                    Sign Up
                  </button>
                </form>
                <p className="text-center mt-4">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    className="text-blue-500 underline focus:outline-none"
                    onClick={toggleForm}
                  >
                    Login
                  </button>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LogIn;
