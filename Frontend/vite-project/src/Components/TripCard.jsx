import React from "react";
import { Link } from "react-router";

const TripCard = ({ trip }) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">

      <div className="flex h-40 items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
        <span className="text-6xl">✈️</span>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold text-slate-900">
          {trip.title}
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          📍 {trip.from} → {trip.destination}
        </p>

        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="text-slate-500">
            🚗 {trip.transport}
          </span>

          <span className="font-semibold text-blue-600">
            ₹{trip.budget}
          </span>
        </div>

        <p className="mt-3 line-clamp-2 text-sm text-slate-500">
          {trip.description}
        </p>

        <Link
          to={`/trip/${trip._id}`}
          className="mt-5 block w-full rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          View Trip
        </Link>
      </div>

    </div>
  );
};

export default TripCard;