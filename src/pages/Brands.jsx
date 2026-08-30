import { MessageCircle } from "lucide-react";
import BrandMarquee from "../components/BrandMarquee";

function Brands() {
  const brands = [
    { name: "Finolex", desc: "Wires, cables & pipes" },
    { name: "Panasonic", desc: "Electrical appliances" },
    { name: "Havells", desc: "Switches & electricals" },
    { name: "Goldmedal", desc: "Switches & accessories" },
    { name: "Philips", desc: "Lighting solutions" },
    { name: "Atomberg", desc: "Fans & smart appliances" },
    { name: "Anchor", desc: "Wiring devices" },
    { name: "Crompton", desc: "Fans & lighting" },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1624927637280-f033784c1279?auto=format&fit=crop&w=1600&q=80"
          alt="Store shelf"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Brands We Deal In
          </h1>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            We stock only genuine products from India's most trusted electrical
            and hardware brands, for lasting quality.
          </p>
        </div>
      </section>

      {/* Moving Brand Strip */}
      <section className="py-10">
        <BrandMarquee />
      </section>

      {/* Brand Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="border border-gray-200 rounded-xl p-6 text-center hover:border-red-500 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-lg text-gray-800">{brand.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{brand.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Note */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
            100% Genuine Products, Guaranteed
          </h2>
          <p className="text-gray-500 mb-6">
            Every product we sell is sourced directly from authorized
            distributors. No duplicates, no compromises.
          </p>
          <a
            href="https://wa.me/918825486940"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <MessageCircle size={18} />
            Ask About a Product
          </a>
        </div>
      </section>
    </div>
  );
}

export default Brands;
