import slider from "../../assets/slider-2.jpg";
import slider1 from "../../assets/slider-3.jpg";
import slider2 from "../../assets/slider-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        <SwiperSlide className="relative flex items-center justify-center text-white text-2xl font-bold">
          <img
            className="w-full h-full object-cover"
            src={slider}
            alt="Crowdfunding"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>

          {/* Text Content */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white text-center p-6 bg-black/30 backdrop-blur-md rounded-lg shadow-lg">
            <h1 className="text-6xl md:text-7xl font-black leading-tight">
              Join the journey <br /> from Idea to Market
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center text-white text-2xl font-bold relative">
          <img
            className="w-full h-full object-cover"
            src={slider1}
            alt="Business"
          />
          <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 p-4 rounded">
            Help Innovators Bring Their Projects to Life
          </p>
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center text-white text-2xl font-bold relative">
          <img
            className="w-full h-full object-cover"
            src={slider2}
            alt="Charity"
          />
          <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black p-4 rounded z-20">
            Support Meaningful Causes & Make a Difference
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
