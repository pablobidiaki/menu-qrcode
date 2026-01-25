import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const imagens_path = [
  "https://i.imgur.com/w6x1ayy.jpeg",
  "https://i.imgur.com/JEAcVln.jpeg",
  "https://i.imgur.com/oFTlqU8.jpeg"
];

const Carousel = () => {
  return (
    <Swiper
      className="bg-black"
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      speed={800}
    >
      {imagens_path.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`slide-${index}`}
            className="w-full h-64 object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
