import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function Sobre() {
  return (
    <div>
      <Navbar />
      <div
        id="main"
        className="min-h-[80vh] bg-gradient-to-t from-black via-slate-700 to-black flex flex-col items-center justify-center gap-7"
      >
        <div id="Titulo">
          <h1 className="relative top-[10px] md:top-[0px] text-center text-2xl md:text-4xl lg:text-5xl font-bold text-white text-shadow-white [text-shadow:_0px_2px_20px_#ffffff]">
            Sobre o Celestia
          </h1>
        </div>
        <div className="mx-50 flex flex-col lg:flex-row gap-5 lg:gap-30 text-white justify-center items-center">
          <img
            src="Print1.png"
            alt="Screenshot1"
            className="width-auto hover:scale-[1.1] duration-700 max-w-[400px] h-[100px] md:h-[100px] lg:h-[230px] rounded-4xl border-1 border-white shadow-2xl [box-shadow:_0px_0px_30px_#ffffff]"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-center text-lg md:text-2xl lg:text-2xl font-bold text-white text-shadow-white [text-shadow:_0px_2px_20px_#ffffff]">
              Quem somos?
            </h1>
            <p className="text-center font-bold text-xs md:text-base md:font-medium lg:text-lg">
              Somos um servidor de survival Realms com foco em trazer a melhor
              experiência possível para você, proporcionando experiências e
              aventuras inesquecíveis! Nosso servidor conta com diversos
              sistemas para tornar a sua jogatina ainda mais divertida, como
              kits, eventos constantes e muito mais!
            </p>
          </div>
        </div>
        <div className="mx-50 flex flex-col lg:flex-row gap-5 lg:gap-30 text-white justify-center items-center">
          <div className="flex flex-col gap-5">
            <h1 className="text-center text-lg md:text-2xl lg:text-2xl font-bold text-white text-shadow-white [text-shadow:_0px_2px_20px_#ffffff]">
              Por que jogar conosco?
            </h1>
            <p className="text-center font-bold text-xs md:text-base md:font-medium lg:text-lg">
              Temos uma comunidade ativa disposta a te ajudar sempre que necessário, uma economia justa e satisfatória e diversos eventos e sistemas, além de suporte 24 horas para tornar sua experiência mais segura e connfortável. Junte-se agora ao nosso servidor e faça parte da diversão!
            </p>
          </div>
          <img
            src="Print2.png"
            alt="Screenshot2"
            className="width-auto hover:scale-[1.1] duration-700 max-w-[400px] h-[100px] md:h-[100px] lg:h-[230px] rounded-4xl border-1 border-white shadow-2xl [box-shadow:_0px_0px_30px_#ffffff]"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sobre;
