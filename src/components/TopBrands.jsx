import { useEffect, useState } from "react";
import Brand from "./brand";
import Marquee from "react-fast-marquee";

const TopBrands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("./brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <Marquee pauseOnHover={true} className="">
      
      {brands.map((brand) => (
        <Brand key={brand._id} brand={brand} />
      ))}
    </Marquee>
  );
};

export default TopBrands;
