import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const NextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow z-10"
      onClick={onClick}
    >
      <FaChevronRight />
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow z-10"
      onClick={onClick}
    >
      <FaChevronLeft />
    </button>
  );
};

const Banner = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
      nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="w-[99%] gap-0 mx-auto overflow-hidden slider-container">
      <Slider {...settings}>
        {data.map((d) => (
          <div
            className="w-full bg-cover bg-center bg-no-repeat overflow-hidden h-[40vh] md:h-[60vh] relative gap-0"
            key={d.id}
          >
            <AnimatePresence className="w-full">
              <motion.img
                src={d.image}
                alt={d.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-fill"
              />
            </AnimatePresence>
            <div className="flex flex-col justify-center items-center absolute bg-white/40 inset-0">
              <h1 className="font-bold text-3xl py-2"> {d.title}</h1>
              <p className="text-gray-800 mb-2">{d.description}</p>
              <button className="bg-[#FF6D00] px-2 md:px-4 py-2 rounded text-white">
                {d.buttonText}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const data = [
  {
    id: 1,
    title: "Voucher Gift Card",
    image:
      "https://i.ibb.co/Xf22MqyS/gift-card-voucher-business-banner-vector-15791290.jpg",
    buttonText: "Claim Now",
    description: "Get exclusive gift voucher deals and save on your shopping.",
  },
  {
    id: 2,
    title: "Special Discount Coupon",
    image: "https://i.ibb.co/7Qt5sPY/discount-card.jpg",
    buttonText: "Get Coupon",
    description: "Unlock special discount coupons and enjoy instant savings.",
  },
  {
    id: 3,
    title: "Promo Voucher Offer",
    image: "https://i.ibb.co/6nPwJM8/promo-voucher.jpg",
    buttonText: "Use Voucher",
    description: "Apply promo vouchers at checkout to redeem exciting offers.",
  },
];

export default Banner;
