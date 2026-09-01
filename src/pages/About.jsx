import { Link } from "react-router-dom";
import { Clock, Users, ShieldCheck, MapPin } from "lucide-react";

import heroShopFront from "../assets/images/hero-shop-front-v3.png";

function About() {
  const stats = [
    { icon: Clock, value: "9+", label: "Years in Business" },
    { icon: Users, value: "1000+", label: "Happy Customers" },
    { icon: ShieldCheck, value: "100%", label: "Genuine Products" },
    { icon: MapPin, value: "1", label: "Trusted Location in Pudupet" },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519520104014-df63821cb6f9?auto=format&fit=crop&w=1600&q=80"
          alt="Wide range of hardware products"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            About Us
          </h1>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            Our story, our promise, and why the neighborhood has trusted us since 2016 — built on 
            trust and quality.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-red-600 text-xs font-semibold tracking-widest uppercase">
              Our Story
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2 mb-5">
              Built On Trust, One Customer At A Time
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sri Hari Electricals started in 2016 with a simple goal — to be
              the hardware store people in Panruti could rely on for genuine
              products and honest advice. What began as a small shop has
              grown into a trusted name for electricals, plumbing, lighting,
              and sanitary ware.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Every product on our shelves is sourced directly from
              authorized distributors — no duplicates, no compromises. Our
              team takes the time to understand what you actually need,
              whether it's a single switch or supplies for an entire home.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nine years on, our promise remains the same: genuine products,
              fair prices, and service you can count on.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={heroShopFront}
              alt="Organized hardware shelving"
              className="w-full h-[380px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white mb-3">
                  <stat.icon size={22} />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
            Come See Us In Person
          </h2>
          <p className="text-gray-500 mb-6">
            No. 125, Arasur Main Road, Pudupet, Panruti TK, Cuddalore 607108
            <br />
            Open daily, 8:00 AM – 9:00 PM
          </p>
          <Link
            to="/contact"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Get Directions
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;