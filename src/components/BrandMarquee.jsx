function BrandMarquee() {
  const brands = [
    "Finolex", "Panasonic", "Havells", "Goldmedal",
    "Philips", "Atomberg", "Anchor", "Crompton",
  ];

  // Duplicate the list so the loop is seamless
  const loop = [...brands, ...brands];

  return (
    <div className="relative overflow-hidden py-4">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-linear-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l from-white to-transparent z-10" />

      <div className="flex w-max animate-marquee">
        {loop.map((brand, i) => (
          <div
            key={brand + i}
            className="flex items-center justify-center mx-4 px-8 py-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[160px]"
          >
            <span className="text-lg font-bold text-gray-700 tracking-wide whitespace-nowrap">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandMarquee;