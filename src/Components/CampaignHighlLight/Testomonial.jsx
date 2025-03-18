import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Arif Rahman",
    message: "This platform changed my life! The support was incredible.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Fatima Ahmed",
    message: "Amazing experience! Thanks for helping me reach my goal.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    message: "Very user-friendly and effective! Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">💬 What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-5 shadow-lg rounded-lg">
              <FaQuoteLeft className="text-blue-500 text-2xl mx-auto mb-3" />
              <p className="text-gray-700 italic">"{testimonial.message}"</p>
              <div className="flex items-center justify-center mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <span className="font-semibold">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
