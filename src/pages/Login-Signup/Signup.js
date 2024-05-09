import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-400 min-h-screen flex justify-center items-center">
      <div className="flex rounded-lg overflow-hidden shadow-xl">
        <div className="bg-white bg-opacity-75 p-8 flex items-center justify-center w-1/2">
          <div className="text-orange-800 text-4xl font-bold">Bloggers</div>
        </div>
        <div className="bg-gray-800 p-8 w-1/2">
          <div>
            <h1 className="text-orange-500 font-bold text-3xl">Signup</h1>
            <p className="text-orange-500 font-thin">
              Welcome, let's get started!
            </p>
          </div>
          <form className="mt-4">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-orange-500 text-xl font-semibold block"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                className="border border-gray-400 rounded px-3 py-2 focus:outline-none focus:border-orange-500 w-full"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="text-orange-500 text-xl font-semibold block"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                id="password"
                className="border border-gray-400 rounded px-3 py-2 focus:outline-none focus:border-orange-500 w-full"
              />
            </div>
            <div className="mb-6 text-orange-500">
              Already have an account?
              <Link
                to="/login"
                className="text-orange-500 ml-1 font-semibold hover:text-orange-600"
              >
                Login
              </Link>
            </div>
            <div className="text-center">
              <button className="bg-orange-500 hover:bg-orange-600 py-2 px-5 rounded text-white">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
