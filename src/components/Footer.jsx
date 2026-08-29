import { Phone, Mail, Clock, Instagram } from "lucide-react";

function Footer() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "Products", id: "products" },
    { name: "Brands", id: "brands" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Shop Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-3">
              Sri Hari Electricals
            </h3>
            <p className="text-sm leading-relaxed">
              No. 125, Arasur Main Road, Pudupet,
              <br />
              Panruti TK, Cuddalore 607108
            </p>
            <p className="text-sm mt-2">Since 2016</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-red-500 cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-3">Get in Touch</h3>

            <div className="flex items-center gap-2 text-sm mb-2">
              <Phone size={16} className="text-red-500" />
              <span>8825486940</span>
            </div>

            <div className="flex items-center gap-2 text-sm mb-2">
              <Mail size={16} className="text-red-500" />
              <span>ksanjai21203@gmail.com</span>
            </div>

            <div className="flex items-center gap-2 text-sm mb-2">
              <Clock size={16} className="text-red-500" />
              <span>8:00 AM – 9:00 PM</span>
            </div>

            <a
              href="https://www.instagram.com/mr.__jacky__"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm mt-2 hover:text-red-500 w-fit"
            >
              <Instagram size={16} className="text-red-500" />
              <span>Follow us on Instagram</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Sri Hari Electricals. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;