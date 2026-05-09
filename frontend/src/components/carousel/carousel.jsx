import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Carousel = ({data}) => {
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
      {data.images?.map((src, index) => (
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
