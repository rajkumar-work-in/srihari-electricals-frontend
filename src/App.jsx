import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Home section placeholder — we'll build this Day 2 */}
        <section id="home" className="py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Sri Hari Electricals
          </h1>
          <p className="text-gray-500 mt-2">Homepage content coming Day 2</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
