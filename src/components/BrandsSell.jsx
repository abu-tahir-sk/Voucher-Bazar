
import brandsData from "../../public/brands.json";
import { Link } from "react-router-dom";

const BrandsSell = () => {
        const onSale = brandsData.filter(b => b.isSaleOn);

  if (!onSale.length) return null;

      return (
             <section className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4"> Brands on Sale</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {onSale.map(b => (
          <div key={b._id} className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition">
            <div className="flex items-center justify-between">
              <img src={b.brand_logo} alt={b.brand_name} className="w-16 h-16 object-contain"/>
              <span className="bg-yellow-400 text-white px-2 py-1 rounded text-xs font-bold">SALE</span>
            </div>
            <h3 className="mt-3 font-semibold">{b.brand_name}</h3>
            <p className="text-sm text-gray-500">{b.category}</p>
            <p className="text-sm mt-2">{b.description}</p>
            <div className="mt-3 flex items-center justify-between">
              <div>Coupons: <strong>{b.coupons.length}</strong></div>
              <Link to={`/brand/${b._id}`} className="px-3 py-1 bg-yellow-400 text-white rounded">View Deals</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
      );
};

export default BrandsSell;