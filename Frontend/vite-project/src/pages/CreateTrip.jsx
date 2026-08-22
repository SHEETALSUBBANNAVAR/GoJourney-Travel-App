import React from "react";

const CreateTrip = () => {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-blue-600">
            Plan your journey
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Create a new trip ✈️
          </h1>

          <p className="mt-2 text-slate-500">
            Tell us a little about your trip and let's start planning.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* Form */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">

            <div className="mb-7">
              <h2 className="text-xl font-semibold text-slate-900">
                Trip details
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Add the basic information about your trip.
              </p>
            </div>

            <div className="space-y-6">

              {/* Destination */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Destination
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
                    📍
                  </span>

                  <input
                    type="text"
                    placeholder="Where do you want to go?"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Dates */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Start date
                  </label>

                  <input
                    type="date"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    End date
                  </label>

                  <input
                    type="date"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>

              </div>

              {/* Travelers */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Number of travelers
                </label>

                <select
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                >
                  <option>1 traveler</option>
                  <option>2 travelers</option>
                  <option>3 travelers</option>
                  <option>4 travelers</option>
                  <option>5+ travelers</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Budget
                </label>

                <div className="grid grid-cols-3 gap-3">
                  {["Budget", "Moderate", "Luxury"].map((item, index) => (
                    <button
                      key={item}
                      type="button"
                      className={`rounded-xl border px-3 py-3 text-sm font-medium transition ${
                        index === 1
                          ? "border-blue-500 bg-blue-50 text-blue-600"
                          : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Trip description
                </label>

                <textarea
                  rows="4"
                  placeholder="What would you like to do on this trip?"
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Button */}
              <button
                type="button"
                className="w-full rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md active:scale-[0.99]"
              >
                Create Trip →
              </button>

            </div>
          </div>

          {/* Preview */}
          <div className="lg:sticky lg:top-8 lg:self-start">

            <div className="overflow-hidden rounded-2xl bg-slate-900 shadow-lg">

              {/* Image placeholder */}
              <div className="flex h-64 items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600">
                <div className="text-center text-white">
                  <div className="mb-3 text-6xl">🌍</div>
                  <p className="text-lg font-semibold">
                    Your adventure starts here
                  </p>
                  <p className="mt-1 text-sm text-white/80">
                    Create a trip you'll remember.
                  </p>
                </div>
              </div>

              <div className="p-6 text-white">

                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Trip preview
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Your destination
                </h3>

                <div className="mt-6 space-y-4">

                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                      📅
                    </span>
                    <div>
                      <p className="text-xs text-slate-400">Dates</p>
                      <p className="text-sm font-medium">
                        Select your dates
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                      👥
                    </span>
                    <div>
                      <p className="text-xs text-slate-400">Travelers</p>
                      <p className="text-sm font-medium">
                        1 traveler
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                      💰
                    </span>
                    <div>
                      <p className="text-xs text-slate-400">Budget</p>
                      <p className="text-sm font-medium">
                        Moderate
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Tip */}
            <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <div className="flex gap-3">
                <span className="text-xl">💡</span>
                <div>
                  <h4 className="text-sm font-semibold text-blue-900">
                    Planning tip
                  </h4>
                  <p className="mt-1 text-xs leading-5 text-blue-700">
                    Add your interests and preferred activities in the
                    description to create a better trip plan.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;