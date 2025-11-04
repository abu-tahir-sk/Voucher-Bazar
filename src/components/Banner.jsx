import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
   const slides = [
    {
      id: 1,
      img: "https://i.ibb.co/BK3tDjhF/images.jpg",
      title: "Save Big on Top Brands",
      subtitle: "Collect coupons & enjoy exclusive discounts!"
    },
    {
      id: 2,
      img: "https://i.ibb.co/PZmDthJ1/NB-copy-6.png",
      title: "Instant Coupon Access",
      subtitle: "No signup required — Copy & Save instantly!"
    },
    {
      id: 3,
      img: "https://i.ibb.co/35908BKx/slide2-1024x380.jpg",
      title: "Get The Best Deals",
      subtitle: "Biggest offers from top Bangladeshi stores"
    }
  ];
  return (
    <div className="max-w-6xl mx-auto h-[300px] md:h-[450px] rounded-xl overflow-hidden ">
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
                className="w-full h-full object-fill"
              />
              <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-center text-center bg-black/40 text-white  p-4">
                <h2 className="text-2xl md:text-4xl font-bold drop-shadow ">
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
