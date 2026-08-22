import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../Components/NavBar.jsx";
import RateLimitedUi from "../Components/RateLimitedUi.jsx";
import TripCard from "../Components/TripCard.jsx";
import toast from "react-hot-toast";

const Home = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5050/api/notes"
        );

        console.log("Backend response:", res.data);

        setTrips(res.data.trips);
        console.log(res.data.trips);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching trips:", error);

        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load trips");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar />

      {isRateLimited ? (
        <RateLimitedUi />
      ) : (
        <main className="mx-auto max-w-7xl px-4 py-10">

          
          <div className="mb-8">
            <p className="text-sm font-medium text-blue-600">
              GoJourney
            </p>

            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              Discover Your Next Trip ✈️
            </h1>

            <p className="mt-2 text-slate-500">
              Explore amazing journeys and plan your next adventure.
            </p>
          </div>

          {/* Loading */}
          {loading ? (
            <div className="py-20 text-center">
              <p className="text-slate-500">
                Loading trips...
              </p>
            </div>
          ) : trips.length === 0 ? (
            <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
              <div className="text-5xl">
                🌍
              </div>

              <h2 className="mt-4 text-xl font-bold text-slate-900">
                No trips available
              </h2>

              <p className="mt-2 text-slate-500">
                Create your first trip to get started.
              </p>
            </div>
          ) : (

            /* Trips */
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {trips.map((trip) => (
                <TripCard
                  key={trip._id}
                  trip={trip}
                />
              ))}
            </div>

          )}

        </main>
      )}
    </div>
  );
};

export default Home;