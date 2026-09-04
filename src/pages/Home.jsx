import { Link } from "react-router-dom";
import { ShieldCheck, Zap, Wrench, Clock, Phone } from "lucide-react";
import BrandMarquee from "../components/BrandMarquee";
import HeroSlider from "../components/HeroSlider";

import heroShopFront from "../assets/images/hero-shop-front-v3.png";
import electricalsImg from "../assets/images/category-electricals.webp";
import plumbingImg from "../assets/images/category-plumbing.jpg";
import lightsImg from "../assets/images/category-lights.jpg";
import wiresImg from "../assets/images/category-wires.jpg";

function Home() {
  const categories = [
    {
      name: "Electricals", img: electricalsImg, desc: "Switches, sockets & accessories"},
    { name: "Plumbing", img: plumbingImg, desc: "Pipes, taps & fittings" },
    { name: "Lights", img: lightsImg, desc: "LED bulbs & fixtures" },
    { name: "Wires & Cables", img: wiresImg, desc: "Hoses, wires & mesh" },
  ];

  const trustPoints = [
    { icon: Clock, title: "Since 2016", desc: "9+ years serving Pudupet" },
    {
      icon: ShieldCheck,
      title: "Genuine Brands",
      desc: "100% authentic products",
    },
    { icon: Zap, title: "Wide Range", desc: "Electricals to sanitary ware" },
    {
      icon: Wrench,
      title: "Expert Advice",
      desc: "Right product for your need",
    },
  ];

  const brands = [
    "Finolex",
    "Panasonic",
    "Havells",
    "Goldmedal",
    "Philips",
    "Atomberg",
    "Anchor",
    "Crompton",
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-130 max-h-180 w-full overflow-hidden">
        <HeroSlider
          images={[
            {
              src: "https://images.unsplash.com/photo-1631856954655-966f97d809de?auto=format&fit=crop&w=1600&q=80",
              alt: "Sri Hari Electricals storefront signage",
            },
            {
              src: "https://images.unsplash.com/photo-1519520104014-df63821cb6f9?auto=format&fit=crop&w=1600&q=80",
              alt: "Variety of hardware products on display",
            },
            {
              src: "https://images.unsplash.com/photo-1624927637280-f033784c1279?auto=format&fit=crop&w=1600&q=80",
              alt: "Clean organized hardware shelving",
            },
          ]}
        />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16 md:pb-24 z-[1]">
          <span className="inline-flex items-center gap-2 text-red-500 text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-red-500" />
            Since 2016 · Pudupet
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.05] max-w-3xl mb-5">
            Genuine Hardware.
            <br />
            Trusted Since Day One.
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-xl mb-8">
            Electricals, plumbing, lighting, sanitary ware, cables & wires —
            everything for your home or project, all under one roof.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/918825486940"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-full font-medium transition-colors text-sm md:text-base"
            >
              Chat on WhatsApp
            </a>

            <a
              href="tel:+918825486940"
              className="flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white px-7 py-3.5 rounded-full font-medium transition-colors text-sm md:text-base"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Floating Quick Enquiry Card - overlaps hero bottom */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl -mt-12 md:-mt-16 relative z-10 p-6 md:p-8 grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h3 className="text-lg md:text-xl font-bold text-gray-800">
              Need something specific?
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Message us your requirement — we'll check stock and get back
              instantly.
            </p>
          </div>
          <a
            href="https://wa.me/918825486940"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white text-center px-6 py-3.5 rounded-xl font-semibold transition-colors"
          >
            Enquire on WhatsApp →
          </a>
        </div>
      </div>

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
            <Link
              to="/products"
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
            </Link>
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
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-red-500 text-xs font-semibold tracking-widest uppercase">
              Why Sri Hari Electricals
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
              Built On Trust, Since 2016
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 text-center hover:border-red-500 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-red-600 text-white mb-4">
                  <point.icon size={24} />
                </div>
                <h3 className="font-semibold text-white text-base">
                  {point.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1.5">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Strip */}
      <section className="py-14 bg-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Brands We Deal In
          </h2>
        </div>
        <BrandMarquee />
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