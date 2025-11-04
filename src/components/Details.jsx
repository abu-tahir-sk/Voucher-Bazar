import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Details = () => {
  const { __id } = useParams();
  const data = useLoaderData();

  const brand = data.find((brand) => brand._id === __id);
  console.log(brand);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied coupon code!");
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex items-center gap-4">
        <img
          src={brand.brand_logo}
          alt={brand.brand_name}
          className="w-24 h-24 object-contain"
        />
        <div>
          <h1 className="text-2xl font-semibold">{brand.brand_name}</h1>
          <div className="text-sm text-gray-500">
            {brand.rating} • {brand.category}
          </div>
        </div>
        <div className="ml-auto">
          <a
            href={brand.shop_link}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1 bg-gray-100 rounded"
          >
            Visit Shop
          </a>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {brand.coupons.map((c) => (
          <div className="bg-white p-4 rounded shadow" key={c.coupon_code}>
            <div className="flex items-start justify-between">
              <div>
                <div className="font-semibold">{c.coupon_code}</div>
                <div className="text-sm text-gray-500">
                  {c.coupon_type} • Expires: {c.expiry_date}
                </div>
              </div>
              <div className="text-sm text-gray-500">{c.condition}</div>
            </div>

            <p className="mt-2 text-sm">{c.description}</p>

            <div className="mt-4 flex items-center gap-2">
              <button
                onClick={() => handleCopy(c.coupon_code)}
                className="px-3 py-1 bg-yellow-400 text-white rounded"
              >
                Copy Code
              </button>

              <a
                href={brand.shop_link}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 border rounded"
              >
                Use Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
