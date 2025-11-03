import { FaCheckCircle } from "react-icons/fa";

const reasons = [
  "100% Verified Coupons",
  "Fast 1-Click Copy System",
  "Save Money on Every Purchase",
  "Coupons from Trusted BD Brands",
  "Daily Updated Offers & Deals"
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Why Choose <span className="text-yellow-500">Discount PRO?</span>
        </h2>
        <p className="text-gray-600 mb-8">
          We help users find exclusive discounts & save money on online shopping.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {reasons.map((item, i) => (
            <div key={i} className="flex items-center gap-2 border p-4 rounded-xl shadow hover:shadow-md transition">
              <FaCheckCircle className="text-yellow-500" />
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
