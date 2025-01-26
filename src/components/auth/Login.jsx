import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const LoadLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log("Form submitted");
  };

  return (
    <section className="min-h-screen  flex items-center justify-center  py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2 lg:w-2/5 mb-10 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone illustration"
            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 lg:w-2/5">
            <form onSubmit={LoadLogin} className=" p-8 shadow-lg rounded-lg">
              {/* Username */}
              <label
                htmlFor="username"
                className="block text-gray-700 font-medium mb-2"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2  focus:outline-none"
              />

              {/* Password */}
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mt-4 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-pink-[#81AC42] focus:outline-none"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-6 bg-[#81AC42] text-white font-bold py-3 rounded-lg  transition duration-300"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
