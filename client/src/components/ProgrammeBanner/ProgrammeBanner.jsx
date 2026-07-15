import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function ProgrammeBanner({ programme }) {
  return (
    <section className="relative h-[650px]">

      {/* Background Images */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        {(programme.images || [programme.banner]).map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[650px] bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Fixed Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">

        <h1 className="text-6xl md:text-7xl font-extrabold text-white">
          {programme.title}
        </h1>

        <p className="text-xl text-gray-200 mt-6 max-w-3xl leading-8">
          {programme.description}
        </p>

      </div>

    </section>
  );
}

export default ProgrammeBanner;