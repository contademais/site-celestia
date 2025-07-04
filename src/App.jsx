import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { MessageCircle, Gamepad2, ClipboardCopy } from "lucide-react";

function App() {
  const code = "Ca6PcCMM96EYTpc";

  function copyCode() {
    navigator.clipboard.writeText(code);
    alert("Código copiado para a área de transferência!");
  }

  return (
    <div>
      <Navbar />
      <div
        id="main"
        className="h-[78vh] lg:h-[80vh] bg-gradient-to-tl from-black via-slate-700 to-black"
      >
        <div
          id="hero-section"
          className="flex flex-col items-center justify-center h-full gap-7"
        >
          <div id="hero-text" className="flex flex-col items-center gap-7">
            <div className="flex flex-col justify-center">
              <h1 className="text-[60px] text-center md:text-[80px] lg:text-[100px] font-bold text-white text-shadow-white text-shadow-lg">
                Celestia
              </h1>
              <h1 className="text-base text-center md:text-xl lg:text-2xl font-bold text-white [text-shadow:_0px_2px_20px_#ffffff]">
                Seja bem-vindo
              </h1>
            </div>
            <p className="text-white text-xs md:text-base lg:text-lg">
              Sobreviva e crie seu legado em um mundo mágico!
            </p>
          </div>
          <div id="hero-buttons" className="flex flex-col md:flex-row gap-5">
            <a
              className="bg-green-700 text-white font-bold p-4 cursor-pointer rounded-md relative flex gap-2 duration-700 hover:[transform:translateY(-5px)] hover:opacity-40"
              href="https://realms.gg/Ca6PcCMM96EYTpc"
              target="_blank"
            >
              <Gamepad2 color="#ffffff" strokeWidth={2.5} /> Jogue agora!
            </a>
            <a
              className="bg-blue-500 text-white font-bold p-4 cursor-pointer rounded-md flex gap-2 duration-700 hover:[transform:translateY(-5px)] hover:opacity-40"
              href="/contato"
            >
              <MessageCircle color="#ffffff" strokeWidth={2.5} /> Fale conosco!
            </a>
          </div>
          <div id="codigo realms">
            <button
              className="bg-gray-600 p-2 rounded-md flex gap-2 text-white cursor-pointer duration-700 hover:[transform:translateY(-5px)] hover:opacity-40"
              onClick={copyCode}
            >
              <ClipboardCopy color="#ffffff" strokeWidth={2.5} /> {code}
            </button>
          </div>
          <div id="nota apenas bedrock">
            <p className="text-white text-xs italic">
              Nota: este servidor funciona apenas com o Minecraft Bedrock Edition.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
