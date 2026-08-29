function Footer() {
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
              <li><a href="#home" className="hover:text-red-500">Home</a></li>
              <li><a href="#products" className="hover:text-red-500">Products</a></li>
              <li><a href="#brands" className="hover:text-red-500">Brands</a></li>
              <li><a href="#about" className="hover:text-red-500">About</a></li>
              <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-3">Get in Touch</h3>
            <p className="text-sm">📞 8825486940</p>
            <p className="text-sm mt-1">✉️ ksanjai21203@gmail.com</p>
            <p className="text-sm mt-1">🕒 8:00 AM – 9:00 PM</p>
            
            <a
              href="https://www.instagram.com/mr.__jacky__"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm hover:text-red-500"
            >
              📷 Follow us on Instagram
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