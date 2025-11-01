const Banner = () => {
  return (
    <div>
      {data.map((d) => (
        <div className="bg-cover bg-no-repeat bg-center  min-h-[60vh]" key={d.id} style={{backgroundImage: `url(${d.image})`}}>
         <div>
            <h1> {d.title}</h1>
            <p>{d.description}</p>
            <button>{d.buttonText}</button>
         </div>
        </div>
      ))}
    </div>
  );
};

const data = [
  {
    "id": 1,
    "title": "Voucher Gift Card",
    "image": "https://i.ibb.co/Xf22MqyS/gift-card-voucher-business-banner-vector-15791290.jpg",
    "buttonText": "Claim Now",
    "description": "Get exclusive gift voucher deals and save on your shopping."
  },
  {
    "id": 2,
    "title": "Special Discount Coupon",
    "image": "https://i.ibb.co/7Qt5sPY/discount-card.jpg",
    "buttonText": "Get Coupon",
    "description": "Unlock special discount coupons and enjoy instant savings."
  },
  {
    "id": 3,
    "title": "Promo Voucher Offer",
    "image": "https://i.ibb.co/6nPwJM8/promo-voucher.jpg",
    "buttonText": "Use Voucher",
    "description": "Apply promo vouchers at checkout to redeem exciting offers."
  }
]

export default Banner;
