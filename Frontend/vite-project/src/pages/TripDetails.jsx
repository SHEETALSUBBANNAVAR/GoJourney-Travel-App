import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router";
import {
  ArrowLeft,
  MapPin,
  CalendarDays,
  Bus,
  Wallet,
  Clock3,
} from "lucide-react";
import toast from "react-hot-toast";
import { formatDate, formatCurrency } from "../lib/utils.js";

const TripDetails = () => {
  const { id } = useParams();

  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5050/api/notes/${id}`
        );

        setTrip(res.data.trip);
      } catch (error) {
        console.log(error);
        toast.error("Failed to load trip");
      } finally {
        setLoading(false);
      }
    };

    fetchTrip();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-slate-500">Loading trip...</p>
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-900">
          Trip not found
        </h2>

        <Link
          to="/"
          className="mt-5 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="mx-auto max-w-5xl px-4 py-6">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white"
          >
            <ArrowLeft size={18} />
            Back to trips
          </Link>

          <div className="mt-8">
            <p className="text-sm font-medium text-white/80">
              GoJourney
            </p>

            <h1 className="mt-2 text-4xl font-bold text-white">
              {trip.title}
            </h1>

            <div className="mt-4 flex items-center gap-2 text-white/90">
              <MapPin size={20} />

              <span>
                {trip.from} → {trip.destination}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Main */}
      <main className="mx-auto max-w-5xl px-4 py-8">

        {/* Trip Summary */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Start Date */}
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <CalendarDays
              className="text-blue-600"
              size={24}
            />

            <p className="mt-3 text-sm text-slate-500">
              Start Date
            </p>

            <p className="mt-1 font-semibold text-slate-900">
              {formatDate(trip.startDate)}
            </p>
          </div>

          {/* End Date */}
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <Clock3
              className="text-purple-600"
              size={24}
            />

            <p className="mt-3 text-sm text-slate-500">
              End Date
            </p>

            <p className="mt-1 font-semibold text-slate-900">
              {formatDate(trip.endDate)}
            </p>
          </div>

          {/* Transport */}
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <Bus
              className="text-green-600"
              size={24}
            />

            <p className="mt-3 text-sm text-slate-500">
              Transport
            </p>

            <p className="mt-1 font-semibold text-slate-900">
              {trip.transport}
            </p>
          </div>

          {/* Budget */}
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <Wallet
              className="text-orange-600"
              size={24}
            />

            <p className="mt-3 text-sm text-slate-500">
              Budget
            </p>

            <p className="mt-1 font-semibold text-slate-900">
              {formatCurrency(trip.budget)}
            </p>
          </div>

        </div>

        {/* Details */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">

          {/* Description */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:col-span-2">

            <h2 className="text-xl font-bold text-slate-900">
              About this trip
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              {trip.description ||
                "No description available for this trip."}
            </p>

          </div>

          {/* Status */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">

            <h2 className="text-xl font-bold text-slate-900">
              Trip Status
            </h2>

            <div className="mt-5">
              <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                {trip.status}
              </span>
            </div>

            <div className="mt-6 border-t pt-5">
              <p className="text-sm text-slate-500">
                Route
              </p>

              <p className="mt-1 font-semibold text-slate-900">
                {trip.from} → {trip.destination}
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Action */}
        <div className="mt-8 flex justify-between rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <Link
            to={`/edit-trip/${trip._id}`}
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Edit Trip
          </Link>

        </div>

      </main>
    </div>
  );
};

export default TripDetails;