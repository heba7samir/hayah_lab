import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // هنا بعدين هتحطي التحقق من الإيميل والباسورد

        navigate("/");
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

            <div className="w-full max-w-md rounded-2xl bg-white shadow-lg p-8">

                <h1 className="text-3xl font-bold text-center mb-2">
                    Welcome Back
                </h1>

                <p className="text-center text-gray-500 mb-8">
                    Sign in to your account
                </p>

                <form
                    className="space-y-5"
                    onSubmit={handleLogin}
                >
                    {/* Email */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-800"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-800"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">

                        <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <NavLink
                            to="/forgot-password"
                            className="text-red-800 hover:underline"
                        >
                            Forgot Password?
                        </NavLink>

                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-red-800 py-3 text-white font-medium transition hover:bg-red-900"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center mt-6 text-gray-600">
                    Don't have an account?{" "}
                    <NavLink
                        to="/register"
                        className="text-red-800 font-medium hover:underline"
                    >
                        Create Account
                    </NavLink>
                </p>

            </div>

        </section>
    );
};