

function Navbar() {
    const botoes = [
        {
            id: 1,
            label: "Inicio",
            link: "/"
        },
        {
            id: 2,
            label: "Sobre",
            link: "/sobre"
        },
        {
            id: 3,
            label: "Contato",
            link: "/contato"
        },
        {
            id: 4,
            label: "Loja",
            link: "/loja"
        },
        {
            id: 5,
            label: "Regras",
            link: "/regras"
        }
    ]

    return (
        <div className={"max-w-[100vw] overflow-x-auto bg-black border-b-2 border-white flex flex-col lg:flex-row justify-evenly items-center h-[14vh] lg:h-[12vh]"}>
            <div id="logo">
                <h1 className="animate-pulse animate uppercase text-xl lg:text-3xl font-bold text-white tracking-[5px] lg:tracking-[10px]">celestia</h1>
            </div>
            <div id="botoes" className="">
                <ul className="flex flex-row gap-2 lg:gap-4">
                    {botoes.map((botao) => (
                        <li key={botao.id}>
                            <a href={botao.link} className="relative hover:[transform:translateY(-5px)] hover:opacity-50 duration-700 cursor-pointer text-white text-xs lg:text-base uppercase tracking-[1px] font-bold">{botao.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;