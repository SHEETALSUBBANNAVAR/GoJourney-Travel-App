import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  User,
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

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const {
      name,
      email,
      password,
      confirmPassword,
    } = formData;

    // Check empty fields
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill all fields");
      return;
    }

    // Check password
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    // Check confirm password
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Frontend success for now
    toast.success("Account created successfully!");

    // Go to Login
    navigate("/login");
  };

  return (
    <AuthLayout>

      {/* ================= LEFT SIDE ================= */}
      <div className="hidden bg-gradient-to-br from-emerald-500/20 via-slate-950 to-blue-500/20 p-10 md:flex md:flex-col md:justify-between">

        <div>
          <AuthBrand />

          <div className="mt-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              Start your journey
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-white">
              Create your account
              <br />
              and explore. 🌍
            </h1>

            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Join GoJourney and keep your trips, destinations,
              and travel plans organized in one place.
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
              Create account
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Create your GoJourney account to get started.
            </p>
          </div>

          {/* ================= FORM ================= */}
          <form
            onSubmit={handleRegister}
            className="mt-8 space-y-5"
          >

            {/* Name */}
            <AuthInput
              label="Full name"
              type="text"
              placeholder="Enter your full name"
              icon={User}
              value={formData.name}
              onChange={handleChange}
              name="name"
            />

            {/* Email */}
            <AuthInput
              label="Email address"
              type="email"
              placeholder="you@example.com"
              icon={Mail}
              value={formData.email}
              onChange={handleChange}
              name="email"
            />

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Password
              </label>

              <div className="relative">

                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
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

            {/* Confirm Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Confirm password
              </label>

              <div className="relative">

                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  name="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-12 text-white outline-none placeholder:text-slate-600 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">

              <input
                type="checkbox"
                id="terms"
                className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800 accent-emerald-500"
              />

              <label
                htmlFor="terms"
                className="text-sm leading-5 text-slate-400"
              >
                I agree to the{" "}
                <button
                  type="button"
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  Terms & Conditions
                </button>
              </label>

            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3.5 font-semibold text-slate-950 transition hover:bg-emerald-400 active:scale-[0.98]"
            >
              Create account
              <ArrowRight size={18} />
            </button>

          </form>

          {/* Login */}
          <p className="mt-8 text-center text-sm text-slate-500">
            Already have an account?{" "}

            <Link
              to="/login"
              className="font-semibold text-emerald-400 hover:text-emerald-300"
            >
              Sign in
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

export default Register;