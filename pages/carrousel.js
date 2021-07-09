import React from "react";
import Navbar from "./components/Navbar";
import CarouselView from "./components/CarouselView";

const Carrousel = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-1">
            <CarouselView />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Carrousel;
