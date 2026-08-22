import React, { useState } from 'react'
import NavBar from '../Components/NavBar.jsx';
import RateLimitedUi from '../Components/RateLimitedUi.jsx';

const Home = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);
  return (
    <div className="min-h-screen">
      <NavBar />
      {isRateLimited && <RateLimitedUi/>}


    </div>
  )
}

export default Home;