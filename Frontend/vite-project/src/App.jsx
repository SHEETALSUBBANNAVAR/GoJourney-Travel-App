import { Routes, Route } from "react-router";
import {
  Home,
  TripDetails,
  CreateTrip,
  EditTrip,
  MyTrips,
  Profile,
  Login,
  Register,
  ExploreTrips,
} from "./pages";

const App = () => {
  return (
    <div className="relative min-h-screen w-full bg-black">

      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]"
      />

      {/* UI */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExploreTrips />} />
          <Route path="/trip/:id" element={<TripDetails />} />
          <Route path="/create-trip" element={<CreateTrip />} />
          <Route path="/edit-trip/:id" element={<EditTrip />} />
          <Route path="/my-trips" element={<MyTrips />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

    </div>
  );
};

export default App;