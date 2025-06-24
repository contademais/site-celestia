import { Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-4 min-h-[8vh]">
      <div className="container mx-auto text-center flex flex-col md:flex-row justify-center items-center gap-30">
        <p>Celestia &copy; 2025 - Todos os direitos reservados.</p>
        <p className="flex flex-col items-center md:flex-row gap-2">
          Site feito com <Heart /> por Adson.{" "}
          <a className="underline text-blue-500" target="_blank" href="https://api.whatsapp.com/send?phone=5541984324209&text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20sites!">
            Contate-me por aqui!
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
