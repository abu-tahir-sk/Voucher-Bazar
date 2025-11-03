import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { brand_logo, brand_name, coupons, rating } = brand;
  return (
    <div className="pr-8 bg-white shadow p-4 rounded-[2px]">
      <div>
        <img className="h-12" src={brand_logo} alt="" />
      </div>
      <Link>
        <h1 className="text-xl font-extrabold py-2">{brand_name}</h1>
        {coupons.map((coupon, index) => (
          <div key={index}>
            <h4>{coupon.description}</h4>
            <p>{coupon.expiry_date}</p>
          </div>
        ))}
        <div>{rating}</div>
      </Link>
    </div>
  );
};

export default Brand;
