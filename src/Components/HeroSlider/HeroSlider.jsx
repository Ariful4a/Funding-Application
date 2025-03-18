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
        {/* Slide 1 */}
        <SwiperSlide className="relative flex items-center justify-center text-white text-lg md:text-2xl font-bold">
          <img
            className="w-full h-[500px] sm:h-[500px] md:h-[500px] lg:h-[600px] object-cover"
            src={slider}
            alt="Crowdfunding"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
          

          {/* Text Content */}
          <div className="absolute top-5 lg:top-0 bottom-16 md:bottom-24 left-1/2 transform -translate-x-1/2 text-white text-center p-4 md:p-6 bg-black/30 backdrop-blur-md rounded-lg shadow-lg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
              Join the journey <br /> from Idea to Market
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg">
              Empowering startups and entrepreneurs to bring their ideas to life. Start your journey now!
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative flex items-center justify-center text-white text-lg md:text-2xl font-bold">
          <img
            className="w-full h-[500px] sm:h-[500px] md:h-[500px] lg:h-[600px] object-cover"
            src={slider1}
            alt="Business"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
          <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 p-4 rounded">
            Help Innovators Bring Their Projects to Life
          </p>
          {/* Additional Text */}
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white text-center p-4 bg-black/40 backdrop-blur-md rounded-lg shadow-lg">
            <p className="md:text-lg">Invest in creativity and fuel innovative solutions for a better tomorrow.</p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative flex items-center justify-center text-white text-lg md:text-2xl font-bold">
          <img
            className="w-full h-[500px] sm:h-[500px] md:h-[500px] lg:h-[600px] object-cover"
            src={slider2}
            alt="Charity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
          <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black p-4 rounded z-20">
            Support Meaningful Causes & Make a Difference
          </p>
          {/* Additional Text */}
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white text-center p-4 bg-black/40 backdrop-blur-md rounded-lg shadow-lg">
            <p className="md:text-lg">Join hands with us to make the world a better place by supporting charitable causes.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
