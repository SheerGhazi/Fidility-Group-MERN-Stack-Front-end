import React from "react";
import Footer from "../Components/Footer/Footer";
import Contact2 from "../Components/Contact/Contact2";
import ImageSlider from "../Components/Slider/Slider";
import Artboard from "../Components/Artboard_Image/Artboard";
import EnergyBanner from "../Components/Main-Banner/EnergyBanner"
import BroadBrand from "../Components/Testimonials/BroadBrand";


const CloudPage = () => {
  return (
    <div>
   
      <EnergyBanner/>
      <BroadBrand/>
      <Artboard />
      <Contact2 />
      <Footer />
    </div>
  );
};

export default CloudPage;
