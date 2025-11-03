import { FaTag } from "react-icons/fa";

const topDeals = [
  {
    brand: "Daraz",
    deal: "30% OFF",
    type: "Fashion & Lifestyle",
    expiry: "2 Days Left",
  },
  {
    brand: "Foodpanda",
    deal: "50% OFF",
    type: "Food Delivery",
    expiry: "1 Day Left",
  },
  {
    brand: "Pickaboo",
    deal: "15% OFF",
    type: "Electronics & Mobile",
    expiry: "Limited Time",
  },
];

const TopDeals = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FaTag className="text-yellow-500" /> Top Deals of The Week
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {topDeals.map((deal, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{deal.brand}</h3>
              <p className="text-yellow-600 font-bold text-lg">{deal.deal}</p>
              <p className="text-sm text-gray-500">{deal.type}</p>
              <p className="text-sm text-red-500 mt-1">{deal.expiry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDeals;
