import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function ProgrammeGallery({ programme }) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000, // Change every 3 seconds
            disableOnInteraction: false,
          }}
        >
          {programme.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`${programme.title} ${index + 1}`}
                className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProgrammeGallery;