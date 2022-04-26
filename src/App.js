import React from "react";
import HeroSection from './Components/HeroSection'
import FeaturedCategory from './Components/FeaturedCategory'
import PopularCategory from './Components/PopularCategory'
import BestOffers from './Components/BestOffers'
import RecentBlogs from './Components/RecentBlogs'
import Subscribe from './Components/Subscribe'
import Testimonial from './Components/Testimonial'
const cors = require("cors");

function App() {
 
  return (
    <div className="App">
    <HeroSection />
    <FeaturedCategory />
    <PopularCategory />
    {/* <BestOffers /> */}
    <RecentBlogs />
    <Testimonial />
    <Subscribe />
    </div>
  );
}

export default App;
