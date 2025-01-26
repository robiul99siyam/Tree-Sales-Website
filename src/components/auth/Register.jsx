import React from "react";
import registerImage from "../../assests/undraw_apps_i78y.svg";
export default function SignUp() {
  const handleRegister = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section className="min-h-screen p-8">
      <div className="container mx-auto h-full">
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-7xl">
            <div className="shadow-lg rounded-lg">
              <div className="grid lg:grid-cols-2 gap-4">
                {/* Form Section */}
                <div className="p-8">
                  <h2 className="text-center text-2xl font-bold mb-5">
                    Sign up
                  </h2>
                  <p
                    id="p"
                    className="text-center text-red-500 font-semibold"
                  ></p>

                  <form onSubmit={handleRegister} className="space-y-4">
                    {/* Username */}
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-user text-gray-400"></i>
                      <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">
                          Username
                        </label>
                        <input
                          type="text"
                          id="username"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          required
                        />
                      </div>
                    </div>

                    {/* First Name */}
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-user text-gray-400"></i>
                      <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          required
                        />
                      </div>
                    </div>

                    {/* Last Name */}
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-user text-gray-400"></i>
                      <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="last_name"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-envelope text-gray-400"></i>
                      <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          required
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-lock text-gray-400"></i>
                      <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password1"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          required
                        />
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="flex items-center space-x-3">
                      <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="password2"
                          className="w-full p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          required
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-4">
                      <button
                        type="submit"
                        className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg transition-all"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>

                {/* Image Section */}
                <div className="hidden lg:flex items-center justify-center rounded-r-lg">
                  <img
                    src={registerImage}
                    alt="Sample"
                    className="w-full h-auto max-w-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
