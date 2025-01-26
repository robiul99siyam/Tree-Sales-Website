import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api";
import Field from "./Field";

export default function Login() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const LoadLogin = async (data) => {
    try {
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/user/Login/`,
        data
      );

      if (response.status === 200) {
        const { user_id, token } = response.data;

        sessionStorage.setItem("user_id", user_id);
        sessionStorage.setItem("token", token);
        navigate("/");
        reset();
      }
    } catch (err) {
      console.log(err);
    }
    // console.log(loginData);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-10">
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
            <form
              onSubmit={handleSubmit(LoadLogin)}
              className="p-8 shadow-lg rounded-lg"
            >
              <Field label="Username" error={errors.username}>
                <input
                  {...register("username", {
                    required: "Username is Required",
                  })}
                  id="username"
                  type="text"
                  className="w-full border text-black border-gray-300 p-3 rounded-lg focus:ring-2 focus:outline-none"
                />
              </Field>

              {/* Password */}

              <Field label="Password" error={errors.password}>
                <input
                  {...register("password", {
                    required: "Password is Required",
                  })}
                  id="password"
                  type="password"
                  className="w-full border text-black border-gray-300 p-3 rounded-lg focus:ring-2 focus:outline-none"
                />
              </Field>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-6 bg-[#81AC42] text-white font-bold py-3 rounded-lg transition duration-300"
              >
                Sign In
              </button>
            </form>

            <div className="py-4 lg:py-6">
              <p className="text-center text-xs text-gray-600/95 lg:text-sm">
                Don’t have account?
                <Link
                  className="text-white transition-all hover:text-lwsGreen hover:underline"
                  to="/register"
                >
                  Create New
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
