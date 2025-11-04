import { useEffect, useState } from "react";

// import { AuthContext } from "../provider/AuthProvider";
import { FaStar } from "react-icons/fa";

const Brands = () => {
       const [brands, setBrands] = useState([]);
  const [search, setSearch] = useState("");
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();

  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

//   const handleViewCoupons = (id) => {
//     if (!user) return navigate("/login");
//     navigate(`/brand/${id}`);
//   };

  const filteredBrands = brands.filter((b) =>
    b.brand_name.toLowerCase().includes(search.toLowerCase())
  );

      return (
            <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">All Brands</h1>

      <input
        type="text"
        placeholder="Search Brands..."
        className="w-full mb-6 p-2 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 gap-4">
        {filteredBrands.map((brand) => (
          <div
            key={brand._id}
            className="border rounded-lg p-4 shadow flex gap-4 items-center"
          >
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="w-20 h-20 object-contain"
            />

            <div className="flex-1">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                {brand.brand_name} <FaStar className="text-yellow-400" />
                {brand.rating}
              </h2>
              <p className="text-gray-600 text-sm mt-1">{brand.description}</p>

              {brand.isSaleOn && (
                <p className="text-green-500 font-bold animate-bounce mt-2">
                  Sale is ON!
                </p>
              )}
            </div>

            <button
            //   onClick={() => handleViewCoupons(brand._id)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Coupons
            </button>
          </div>
        ))}
      </div>
    </div>
      );
};

export default Brands;