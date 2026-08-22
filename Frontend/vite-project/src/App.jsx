import { Routes, Route } from "react-router";
 import { Home, TripDetails, CreateTrip, EditTrip, MyTrips, Profile, Login, Register, ExploreTrips } from "./pages";
  import toast from "react-hot-toast"; 
  
  const App = () => {
     return (
     <div>
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
      </div>); 
      }; 
export default App;