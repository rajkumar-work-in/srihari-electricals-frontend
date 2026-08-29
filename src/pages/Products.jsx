import { MessageCircle } from "lucide-react";

import electricalsImg from "../assets/images/category-electricals.jpg";
import plumbingImg from "../assets/images/category-plumbing.jpg";
import lightsImg from "../assets/images/category-lights.jpg";
import wiresImg from "../assets/images/category-wires.jpg";

function Products() {
  const categories = [
    {
      name: "Electricals",
      img: electricalsImg,
      desc: "Switches, sockets, MCBs, and electrical accessories from trusted brands like Havells, Anchor, and Goldmedal.",
    },
    {
      name: "Plumbing",
      img: plumbingImg,
      desc: "PVC pipes, fittings, taps, and plumbing accessories in various sizes for home and commercial use.",
    },
    {
      name: "Lights",
      img: lightsImg,
      desc: "LED bulbs, tube lights, and decorative lighting from Philips, Goldmedal, and other leading brands.",
    },
    {
      name: "Wires & Cables",
      img: wiresImg,
      desc: "Flexible hoses, wire mesh, and electrical cables from Finolex and other trusted manufacturers.",
    },
    {
      name: "Sanitary Ware",
      img: plumbingImg,
      desc: "Taps, fittings, and bathroom sanitary fixtures for new construction and renovations.",
    },
    {
      name: "Cables",
      img: wiresImg,
      desc: "House wiring cables, extension cords, and industrial cabling solutions.",
    },
  ];

  const whatsappLink = (category) =>
    `https://wa.me/918825486940?text=${encodeURIComponent(
      `Hi, I'm interested in ${category} products at Sri Hari Electricals`
    )}`;

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gray-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Our Products
          </h1>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            From electricals to plumbing, we stock everything you need for
            your home or project — all genuine, all reliable.
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
                <p className="text-sm text-gray-500 mb-4 flex-1">
                  {cat.desc}
                </p>
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
            We stock a lot more than what's shown here. Message us directly
            and we'll help you find it.
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