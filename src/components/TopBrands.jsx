import Marquee from "react-fast-marquee";
import brandsData from "../../public/brands.json";
import { Link } from "react-router-dom";
const TopBrands = () => {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <Marquee pauseOnHover gradient={false} speed={30}>
            {brandsData.map((b) => (
              <div key={b._id} className="mx-12 flex items-center hover:bg-white hover:shadow-xl border border-white/10">
                <Link to={`/details/${b._id}`}>
                <img
                  src={b.brand_logo}
                  alt={b.brand_name}
                  className="w-24 h-24 object-contain rounded-full bg-white p-2"
                />
          </Link>
              </div>
            ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TopBrands;
