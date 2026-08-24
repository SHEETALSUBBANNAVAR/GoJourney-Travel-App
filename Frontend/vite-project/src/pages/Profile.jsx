import React from "react";
import { Link } from "react-router";
import {
  User,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  Pencil,
  LogOut,
  ArrowLeft,
  Plane,
  Map,
} from "lucide-react";

import AuthBrand from "../Components/Auth/AuthBrand.jsx";

const Profile = () => {
  // Sample UI data only
  const user = {
    name: "Sheetal Subbannavar",
    email: "sheetal@example.com",
    phone: "",
    location: "",
    joined: "August 2026",
    trips: 6,
    destinations: 4,
  };

  return (
    <div className="min-h-screen bg-slate-950">

      {/* Header */}
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">

          <AuthBrand />

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            <ArrowLeft size={17} />
            Back Home
          </Link>

        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-5 py-10">

        {/* Profile Card */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">

          {/* Cover */}
          <div className="relative h-44 bg-gradient-to-r from-emerald-500/30 via-slate-900 to-blue-500/30">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.25),transparent_45%)]" />

          </div>

          {/* User Info */}
          <div className="px-6 pb-8 sm:px-8">

            {/* Avatar */}
            <div className="-mt-16 flex h-32 w-32 items-center justify-center rounded-full border-4 border-slate-950 bg-gradient-to-br from-emerald-400 to-blue-500 shadow-xl">

              <User
                size={52}
                className="text-slate-950"
              />

            </div>

            <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

              <div>
                <h1 className="text-3xl font-bold text-white">
                  {user.name}
                </h1>

                <p className="mt-1 text-slate-400">
                  Travel enthusiast ✈️
                </p>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                <Pencil size={17} />
                Edit Profile
              </button>

            </div>

          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          {/* Trips */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

            <div className="flex items-center gap-4">

              <div className="rounded-xl bg-emerald-400/10 p-3">
                <Plane
                  size={23}
                  className="text-emerald-400"
                />
              </div>

              <div>
                <p className="text-2xl font-bold text-white">
                  {user.trips}
                </p>

                <p className="text-sm text-slate-500">
                  Total Trips
                </p>
              </div>

            </div>

          </div>

          {/* Destinations */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

            <div className="flex items-center gap-4">

              <div className="rounded-xl bg-blue-400/10 p-3">
                <Map
                  size={23}
                  className="text-blue-400"
                />
              </div>

              <div>
                <p className="text-2xl font-bold text-white">
                  {user.destinations}
                </p>

                <p className="text-sm text-slate-500">
                  Destinations
                </p>
              </div>

            </div>

          </div>

          {/* Joined */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

            <div className="flex items-center gap-4">

              <div className="rounded-xl bg-purple-400/10 p-3">
                <CalendarDays
                  size={23}
                  className="text-purple-400"
                />
              </div>

              <div>
                <p className="text-lg font-bold text-white">
                  {user.joined}
                </p>

                <p className="text-sm text-slate-500">
                  Joined
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">

          {/* Personal Information */}
          <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">

            <h2 className="text-xl font-bold text-white">
              Personal Information
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage your account information
            </p>

            <div className="mt-7 space-y-6">

              {/* Name */}
              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-white/5 p-3">
                  <User
                    size={20}
                    className="text-slate-400"
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Full Name
                  </p>

                  <p className="mt-1 font-medium text-white">
                    {user.name}
                  </p>
                </div>

              </div>

              {/* Email */}
              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-white/5 p-3">
                  <Mail
                    size={20}
                    className="text-slate-400"
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Email Address
                  </p>

                  <p className="mt-1 font-medium text-white">
                    {user.email}
                  </p>
                </div>

              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-white/5 p-3">
                  <Phone
                    size={20}
                    className="text-slate-400"
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Phone Number
                  </p>

                  {user.phone ? (
                    <p className="mt-1 font-medium text-white">
                      {user.phone}
                    </p>
                  ) : (
                    <button
                      type="button"
                      className="mt-1 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
                    >
                      + Add phone number
                    </button>
                  )}

                </div>

              </div>

              {/* Location */}
              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-white/5 p-3">
                  <MapPin
                    size={20}
                    className="text-slate-400"
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Location
                  </p>

                  {user.location ? (
                    <p className="mt-1 font-medium text-white">
                      {user.location}
                    </p>
                  ) : (
                    <button
                      type="button"
                      className="mt-1 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
                    >
                      + Add location
                    </button>
                  )}

                </div>

              </div>

            </div>

          </div>

          {/* Account */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">

            <h2 className="text-xl font-bold text-white">
              Account
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage your GoJourney account
            </p>

            <div className="mt-7 space-y-3">

              <Link
                to="/my-trips"
                className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                My Trips
                <Plane size={17} />
              </Link>

              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                Edit Profile
                <Pencil size={17} />
              </button>

              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl border border-red-500/20 px-4 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10"
              >
                Logout
                <LogOut size={17} />
              </button>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
};

export default Profile;