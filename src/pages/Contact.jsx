import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  const contactCards = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 88254 86940",
      href: "tel:+918825486940",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat with us instantly",
      href: "https://wa.me/918825486940",
    },
    {
      icon: Mail,
      title: "Email",
      value: "ksanjai21203@gmail.com",
      href: "mailto:ksanjai21203@gmail.com",
    },
    {
      icon: FaInstagram,
      title: "Instagram",
      value: "@mr.__jacky__",
      href: "https://www.instagram.com/mr.__jacky__",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1567361808960-dec9cb578182?auto=format&fit=crop&w=1600&q=80"
          alt="Hardware tools"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Get In Touch
          </h1>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            Have a question or need something specific? We're just a message away — our team is always 
            ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-red-500 hover:shadow-md transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 mb-4">
                <card.icon size={22} />
              </div>
              <h3 className="font-semibold text-gray-800">{card.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{card.value}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Map + Details */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Details */}
            <div>
              <span className="text-red-600 text-xs font-semibold tracking-widest uppercase">
                Visit Our Store
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2 mb-6">
                Sri Hari Electricals
              </h2>

              <div className="flex items-start gap-3 mb-4">
                <MapPin className="text-red-600 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-600">
                  No. 125, Arasur Main Road, Pudupet,
                  <br />
                  Panruti TK, Cuddalore 607108
                </p>
              </div>

              <div className="flex items-start gap-3 mb-8">
                <Clock className="text-red-600 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-600">Open daily, 8:00 AM – 9:00 PM</p>
              </div>
              <a
                href="https://wa.me/918825486940"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <MessageCircle size={18} />
                Message Us on WhatsApp
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-[350px]">
              <iframe
                title="Sri Hari Electricals Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=79.5980%2C11.7680%2C79.6080%2C11.7780&layer=mapnik&marker=11.7730%2C79.6030"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;