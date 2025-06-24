import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function Regras() {
  return (
    <div>
      <Navbar />
      <div
        id="main"
        className="h-[80vh] bg-gradient-to-br from-black via-slate-700 to-black"
      >
        <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold text-white text-shadow-white [text-shadow:_0px_2px_20px_#ffffff]">
            Em breve
          </h1>
      </div>
      <Footer />
    </div>
  );
}

export default Regras;
