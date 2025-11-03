import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
   const slides = [
    {
      id: 1,
      img: "https://i.ibb.co/3fK3J4x/discount-banner1.jpg",
      title: "Save Big on Top Brands",
      subtitle: "Collect coupons & enjoy exclusive discounts!"
    },
    {
      id: 2,
      img: "https://i.ibb.co/tPgGZrG/coupon-banner.jpg",
      title: "Instant Coupon Access",
      subtitle: "No signup required — Copy & Save instantly!"
    },
    {
      id: 3,
      img: "https://i.ibb.co/wz6ZpDV/shopping-discount-banner.jpg",
      title: "Get The Best Deals",
      subtitle: "Biggest offers from top Bangladeshi stores"
    }
  ];
  return (
    <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-md">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5 bg-opacity-40 flex flex-col items-center justify-center text-center text-white p-4">
                <h2 className="text-2xl md:text-4xl font-bold drop-shadow">
                  {slide.title}
                </h2>
                <p className="mt-2 md:text-lg">{slide.subtitle}</p>
                <button className="mt-3 px-5 py-2 bg-yellow-400 text-black font-medium rounded hover:bg-yellow-500 transition">
                  Explore Deals
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};



export default Banner;
