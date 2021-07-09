import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
const CarouselView = () => {
  const [rivers, setRivers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    await axios
      .get("https://api.nuxtjs.dev/rivers")
      .then((response) => {
        setRivers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error)
       
      });
  }, []);

 
  return (
    <>
      {loading ? (
        <div className="grid justify-items-center content-center">
          <Loader type="Puff" color="#00BFFF" height={200} width={200} />;
        </div>
      ) : (
        <Swiper
        breakpoints={{
          "640": {
            "slidesPerView": 1,
            "spaceBetween": 10
          },
          "768": {
            "slidesPerView": 2,
            "spaceBetween": 20
          },
          "1024": {
            "slidesPerView": 3,
            "spaceBetween": 10
          }
        }}
       
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          {rivers.map((river, index) => (
            <>
              <SwiperSlide key={index}>
                <div className="md:p-10">
                  <div className="max-w-sm rounded overflow-hidden shadow-lg  sm:mx-auto">
                    <img className="w-full" src={river.image} alt="Mountain" />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">
                        {river.title}
                      </div>
                      <div>
                        <p className="max-h-32 overflow-scroll text-base">
                        {river.description}
                      </p>
                      </div>
                      
                    </div>
                    <div className="px-6 pt-4 pb-2 max-h-16 overflow-scroll">
                      
                      {river.countries.map((country, index) => (
                        <span  key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      )}
    </>
  );
};
export default CarouselView;
