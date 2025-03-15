import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HeroSlider = () => {
  return (
    <div className="w-full h-[400px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-full"
      >
        <SwiperSlide className="bg-cover bg-center flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundImage: "url('https://source.unsplash.com/800x400/?startup')" }}>
          Empower Your Ideas with Crowdfunding!
        </SwiperSlide>
        <SwiperSlide className="bg-cover bg-center flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundImage: "url('https://source.unsplash.com/800x400/?business')" }}>
          Help Innovators Bring Their Projects to Life
        </SwiperSlide>
        <SwiperSlide className="bg-cover bg-center flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundImage: "url('https://source.unsplash.com/800x400/?charity')" }}>
          Support Meaningful Causes & Make a Difference
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
