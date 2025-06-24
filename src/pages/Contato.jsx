import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

function Contato() {
  const [iconSize, setIconSize] = useState(20);

  function handleIconSize() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      setIconSize(22);
    } else {
      setIconSize(36);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleIconSize);
    handleIconSize();
  }, []);

  return (
    <div>
      <Navbar />
      <div
        id="main"
        className="h-[78vh] lg:h-[80vh] bg-gradient-to-tr from-black via-slate-700 to-black"
      >
        <div
          id="hero-section"
          className="h-[100%] flex flex-col items-center justify-center gap-7 text-white"
        >
          <div id="hero-text" className="flex flex-col items-center gap-3">
            <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold text-white text-shadow-white [text-shadow:_0px_2px_20px_#ffffff]">
              Contate-nos!
            </h1>
            <p className="text-center text-white text-xs md:text-base lg:text-lg">
              Entre em contato conosco para tirar suas dúvidas!
            </p>
          </div>
          <div id="hero-buttons" className="flex flex-col md:flex-row gap-15">
            <div
              id="Discord"
              className="flex flex-col items-center h-[200px] w-[232px] md:h-[275px] md:w-[320px] bg-[#1E1E1E] rounded-lg border-2 border-gray-600"
            >
              <h1 className="flex flex-row font-bold text-blue-600 text-sm md:text-2xl pt-3 md:py-3 mt-2 gap-1">
                {" "}
                <MessageCircle size={iconSize} /> Discord
              </h1>
              <p className="px-10 py-2 font-medium text-xs md:text-base md:font-bold text-center">
                Junte-se a nossa comunidade e fique por dentro de novidades,
                anúncios e eventos, além de ter suporte 24 horas!
              </p>
              <a
                href="http://discord.gg/yvP8JtCVVe"
                target="_blank"
                className="bg-blue-600 text-[10px] md:text-[16px] text-center text-white font-medium md:font-bold py-2 md:py-3 px-2 md:px-4 rounded hover:bg-blue-700 mt-1 md:mt-3 cursor-pointer duration-700 hover:[transform:translateY(-5px)] hover:opacity-40"
              >
                Entrar no Discord
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contato;
