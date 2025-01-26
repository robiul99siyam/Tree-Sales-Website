import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../api";
import registerImage from "../../assests/undraw_apps_i78y.svg";
import Field from "./Field";
export default function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const SubmitForm = async (data) => {
    try {
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/user/Register/`,
        data
      );

      if (response.status === 200) {
        toast.success(response.data);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }

    reset();
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

                  <form
                    onSubmit={handleSubmit(SubmitForm)}
                    className="space-y-4"
                  >
                    {/* Username */}
                    <div className="flex items-center  space-x-3">
                      <div className="w-full">
                        <Field label="Username" error={errors.username}>
                          <input
                            {...register("username", {
                              required: "Username is Required",
                            })}
                            type="text"
                            id="username"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          />
                        </Field>
                      </div>
                    </div>
                    <div className="flex items-center  space-x-3">
                      <div className="w-full">
                        <Field label="First name" error={errors.first_name}>
                          <input
                            {...register("first_name", {
                              required: "First Name is Required",
                            })}
                            type="text"
                            id="first_name"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          />
                        </Field>
                      </div>
                    </div>
                    <div className="flex items-center  space-x-3">
                      <div className="w-full">
                        <Field label="Last name" error={errors.last_name}>
                          <input
                            {...register("last_name", {
                              required: "First Name is Required",
                            })}
                            type="text"
                            id="last_name"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          />
                        </Field>
                      </div>
                    </div>
                    <div className="flex items-center  space-x-3">
                      <div className="w-full">
                        <Field label="Password" error={errors.password}>
                          <input
                            {...register("password", {
                              required: "Password Name is Required",
                            })}
                            type="password"
                            id="password"
                            className="w-full p-2 text-gray-950 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          />
                        </Field>
                      </div>
                    </div>
                    <div className="flex items-center  space-x-3">
                      <div className="w-full">
                        <Field
                          label="Confrim password"
                          error={errors.confrim_password}
                        >
                          <input
                            {...register("confrim_password", {
                              required: "confrim password is Required",
                            })}
                            type="password"
                            id="confrim_password"
                            className="w-full p-2 border text-gray-950 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          />
                        </Field>
                      </div>
                    </div>
                    <div className="flex items-center  space-x-3">
                      <div className="w-full">
                        <Field label="Email address" error={errors.email}>
                          <input
                            {...register("email", {
                              required: "email address is Required",
                            })}
                            type="email"
                            id="email"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          />
                        </Field>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-4">
                      <button
                        type="submit"
                        className="bg-[#81AC42]  w-full text-white font-bold px-6 py-3 rounded-lg shadow-lg transition-all"
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
                <div className="py-4 lg:py-6">
                  <p className="text-center text-xs text-gray-600/95 lg:text-sm">
                    Don’t have account?
                    <Link
                      className="text-white transition-all hover:text-lwsGreen hover:underline"
                      to="/login"
                    >
                      login here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
}
