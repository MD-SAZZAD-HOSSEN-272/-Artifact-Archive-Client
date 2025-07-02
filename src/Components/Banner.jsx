import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    title: "Unearth the Past",
    description: "Explore forgotten artifacts that reveal the untold stories of ancient civilizations.",
    image: "https://img.freepik.com/free-photo/digital-art-with-man-planet-earth_23-2151064556.jpg?uid=R198821472&ga=GA1.1.1540942795.1731320437&semt=ais_hybrid&w=740",
  },
  {
    title: "Timeless Craftsmanship",
    description: "Admire artifacts showcasing the rich heritage, design, and detail of human history.",
    image: "https://img.freepik.com/premium-photo/man-is-working-piece-art-workshop_460794-476.jpg?uid=R198821472&ga=GA1.1.1540942795.1731320437&semt=ais_hybrid&w=740",
  },
  {
    title: "Guardians of History",
    description: "Join us in preserving cultural relics and passing their legacy to future generations.",
    image: "https://img.freepik.com/free-photo/mythical-video-game-inspired-landscape-with-fortress_23-2150974268.jpg?uid=R198821472&ga=GA1.1.1540942795.1731320437&semt=ais_hybrid&w=740",
  },
];


const SliderComponent = () => {
  return (
    <div className="w-full mx-auto pb-10">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000}}
        loop={true}
        className="rounded-2xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[60vh] object-cover rounded-2xl shadow-md transition-all duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/70 rounded-2xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:p-6 text-white rounded-b-2xl">
                <h2 className="text-3xl font-bold">{slide.title}</h2>
                <p className="text-sm mt-1">{slide.description}</p>
                <button className="mt-3 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow">
                  View More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderComponent;
