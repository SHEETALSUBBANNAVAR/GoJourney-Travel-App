import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import toast from "react-hot-toast";

import AuthBrand from "../Components/Auth/AuthBrand.jsx";
import AuthInput from "../Components/Auth/AuthInput.jsx";
import AuthLayout from "../Components/Auth/AuthLayout.jsx";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // Check empty fields
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    // Password validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    /*
      Frontend login for now.

      We don't have the backend authentication
      connected yet, so save the login information
      locally.
    */

    const user = {
      name: email.split("@")[0],
      email: email,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    toast.success("Login successful!");

    // Go to Home
    navigate("/");
  };

  return (
    <AuthLayout>

      {/* ================= LEFT SIDE ================= */}
      <div className="hidden bg-gradient-to-br from-emerald-500/20 via-slate-950 to-blue-500/20 p-10 md:flex md:flex-col md:justify-between">

        <div>

          <AuthBrand />

          <div className="mt-20">

            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              Welcome back
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-white">
              Your next adventure
              <br />
              starts here. ✈️
            </h1>

            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Log in to manage your trips, explore new
              destinations, and keep all your travel plans
              in one place.
            </p>

          </div>

        </div>

        <p className="text-sm text-slate-500">
          Plan. Explore. Travel.
        </p>

      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="bg-slate-900/80 p-6 sm:p-10">

        <div className="mx-auto max-w-md">

          {/* Mobile Logo */}
          <div className="md:hidden">
            <AuthBrand />
          </div>

          {/* Heading */}
          <div className="mt-8 md:mt-0">

            <h2 className="text-3xl font-bold text-white">
              Welcome back
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Sign in to continue your journey.
            </p>

          </div>

          {/* ================= FORM ================= */}
          <form
            onSubmit={handleLogin}
            className="mt-8 space-y-5"
          >

            {/* Email */}
            <AuthInput
              label="Email address"
              type="email"
              placeholder="you@example.com"
              icon={Mail}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            {/* Password */}
            <div>

              <div className="mb-2 flex items-center justify-between">

                <label className="text-sm font-medium text-slate-300">
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs font-medium text-emerald-400 hover:text-emerald-300"
                >
                  Forgot password?
                </button>

              </div>

              <div className="relative">

                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  name="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-12 text-white outline-none placeholder:text-slate-600 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>

            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">

              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-slate-600 bg-slate-800 accent-emerald-500"
              />

              <label
                htmlFor="remember"
                className="text-sm text-slate-400"
              >
                Remember me
              </label>

            </div>

            {/* Sign In */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3.5 font-semibold text-slate-950 transition hover:bg-emerald-400 active:scale-[0.98]"
            >
              Sign in
              <ArrowRight size={18} />
            </button>

          </form>

          {/* Register */}
          <p className="mt-8 text-center text-sm text-slate-500">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="font-semibold text-emerald-400 hover:text-emerald-300"
            >
              Create an account
            </Link>

          </p>

          {/* Back Home */}
          <div className="mt-6 text-center">

            <Link
              to="/"
              className="text-xs text-slate-400 hover:text-white"
            >
              ← Back to GoJourney
            </Link>

          </div>

        </div>

      </div>

    </AuthLayout>
  );
};

export default Login;