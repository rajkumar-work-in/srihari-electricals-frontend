import { Link } from "react-router-dom";
import { ShieldCheck, Zap, Wrench, Clock, Phone } from "lucide-react";

import heroImg from "../assets/images/hero-shop-front.jpg";
import electricalsImg from "../assets/images/category-electricals.jpg";
import plumbingImg from "../assets/images/category-plumbing.jpg";
import lightsImg from "../assets/images/category-lights.jpg";
import wiresImg from "../assets/images/category-wires.jpg";

function Home() {
  const categories = [
    { name: "Electricals", img: electricalsImg, desc: "Switches, sockets & accessories" },
    { name: "Plumbing", img: plumbingImg, desc: "Pipes, taps & fittings" },
    { name: "Lights", img: lightsImg, desc: "LED bulbs & fixtures" },
    { name: "Wires & Cables", img: wiresImg, desc: "Hoses, wires & mesh" },
  ];

  const trustPoints = [
    { icon: Clock, title: "Since 2016", desc: "9+ years serving Panruti" },
    { icon: ShieldCheck, title: "Genuine Brands", desc: "100% authentic products" },
    { icon: Zap, title: "Wide Range", desc: "Electricals to sanitary ware" },
    { icon: Wrench, title: "Expert Advice", desc: "Right product for your need" },
  ];

  const brands = [
    "Finolex", "Panasonic", "Havells", "Goldmedal",
    "Philips", "Atomberg", "Anchor", "Crompton",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="h-[420px] md:h-[520px] w-full overflow-hidden">
          <img
            src={heroImg}
            alt="Sri Hari Electricals shop front"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide">
            SINCE 2016
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Sri Hari Electricals
          </h1>
          <p className="text-gray-200 text-base md:text-lg max-w-xl mb-8">
            Your trusted hardware store for Electricals, Plumbing, Lights,
            Sanitary Ware, Cables & Wires in Panruti
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/918825486940"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              WhatsApp Us
            </a>
            
            <a
              href="tel:+918825486940"
              className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Category Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What We Offer
          </h2>
          <p className="text-gray-500 mt-2">
            Everything you need under one roof
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white"
            >
              <div className="h-40 md:h-48 overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                  {cat.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustPoints.map((point) => (
              <div key={point.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 mb-3">
                  <point.icon size={22} />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                  {point.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Strip */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8">
            Brands We Deal In
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {brands.map((brand) => (
              <span
                key={brand}
                className="border border-gray-200 rounded-full px-5 py-2 text-sm md:text-base font-medium text-gray-700 hover:border-red-500 hover:text-red-600 transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-red-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Visit Us Today
          </h2>
          <p className="text-red-100 mb-6">
            No. 125, Arasur Main Road, Pudupet, Panruti TK, Cuddalore 607108
            <br />
            Open 8:00 AM – 9:00 PM
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/918825486940"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              WhatsApp Us
            </a>
            
            <a
              href="tel:+918825486940"
              className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Call: +91 8825486940
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;