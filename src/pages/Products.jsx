import { MessageCircle } from "lucide-react";

import modularSwitchesImg from "../assets/images/modular-switches.jpg";
import lightingDecorativeImg from "../assets/images/lighting-decorative.jpg";
import pipeFittingsImg from "../assets/images/pipe-fittings.jpg";
import wireCoilsImg from "../assets/images/wire-coils.jpg";

function Products() {
    const categories = [
    {
      name: "Modular Switches",
      img: modularSwitchesImg,
      desc: "Wide range of modular switches and accessories from Havells, Anchor, and Goldmedal.",
    },
    {
      name: "Decorative Lighting",
      img: lightingDecorativeImg,
      desc: "Stylish decorative lights and lamps to brighten every corner of your home.",
    },
    {
      name: "Plumbing Pipes & Fittings",
      img: pipeFittingsImg,
      desc: "Genuine Finolex PVC pipes, fittings, and solvent cement for reliable plumbing.",
    },
    {
      name: "Wires & Cables",
      img: wireCoilsImg,
      desc: "House wiring cables and industrial wires in multiple colors and sizes.",
    },
    {
      name: "Ceiling Fans",
      img: "https://images.unsplash.com/photo-1609519479841-5fd3b2884e17?auto=format&fit=crop&w=800&q=80",
      desc: "Energy-efficient ceiling and table fans from Crompton and Atomberg.",
    },
    {
      name: "Hardware Tools & Accessories",
      img: "https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?auto=format&fit=crop&w=800&q=80",
      desc: "Hand tools and accessories for every home and professional repair job.",
    },
    {
      name: "Paints & Adhesives",
      img: "https://images.unsplash.com/photo-1510016290251-68aaad49723e?auto=format&fit=crop&w=800&q=80",
      desc: "Quality paints, primers, and adhesives for finishing and maintenance work.",
    },
    {
      name: "General Hardware Supplies",
      img: "https://images.unsplash.com/photo-1631856954913-c751a44490ec?auto=format&fit=crop&w=800&q=80",
      desc: "Everyday hardware essentials to keep your home and workspace running smoothly.",
    },
    {
      name: "Sanitary Ware & Fittings",
      img: "https://images.unsplash.com/photo-1631856956423-2b95dae0ba74?auto=format&fit=crop&w=800&q=80",
      desc: "Bathroom sanitary fixtures and fittings for new builds and renovations.",
    },
  ];

  const whatsappLink = (category) =>
    `https://wa.me/918825486940?text=${encodeURIComponent(
      `Hi, I'm interested in ${category} products at Sri Hari Electricals`,
    )}`;

  return (
    <div>
      {/* Page Header */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1631856954655-966f97d809de?auto=format&fit=crop&w=1600&q=80"
          alt="Hardware store aisle"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Our Products
          </h1>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            From electricals to plumbing, we stock everything you need for your
            home or project — all genuine, all reliable.
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white flex flex-col"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-gray-800 text-lg mb-2">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4 flex-1">{cat.desc}</p>
                <a
                  href={whatsappLink(cat.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <MessageCircle size={16} />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-500 mb-6">
            We stock a lot more than what's shown here. Message us directly and
            we'll help you find it.
          </p>
          <a
            href="https://wa.me/918825486940"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Chat With Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default Products;