import slider from '../../assets/slider-2.jpg';
import slider1 from '../../assets/slider-3.jpg';
import slider2 from '../../assets/slider-4.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules"; // Pagination মডিউল যুক্ত করা হয়েছে
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Pagination এর জন্য CSS ইনপোর্ট করা

const HeroSlider = () => {
  return (
    <div className="w-full h-[400px]">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]} // Pagination মডিউল যুক্ত করা হয়েছে
        navigation
        autoplay={{ delay: 3000 }}
        loop
        pagination={{ clickable: true }} // pagination ক্লিকযোগ্য করার জন্য
        className="w-full h-full"
      >
        <SwiperSlide className="flex items-center justify-center text-white text-2xl font-bold">
          <img src={slider} alt="Crowdfunding" className="w-full h-full object-cover" />
          <p className="absolute text-white bg-black bg-opacity-50 p-4 rounded">Empower Your Ideas with Crowdfunding!</p>
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center text-white text-2xl font-bold">
          <img src={slider1} alt="Business" className="w-full h-full object-cover" />
          <p className="absolute text-white bg-black bg-opacity-50 p-4 rounded">Help Innovators Bring Their Projects to Life</p>
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center text-white text-2xl font-bold">
          <img src={slider2} alt="Charity" className="w-full h-full object-cover" />
          <p className="absolute text-white bg-black bg-opacity-50 p-4 rounded">Support Meaningful Causes & Make a Difference</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
