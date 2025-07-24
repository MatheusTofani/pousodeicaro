import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";


const Footer = () => {

    const adress = [
        {
            icon: "Aaa",
            name: "end",
        },
        {
            icon: "sss",
            name: "tel"
        },
        {
            icon: "ddd",
            name: "mail"
        },
    ]

    const navs = [
        {
            href: "/",
            name: "Termos",
        },
        {
           href: "/",
            name: "Café",
        },
        {
           href: "/",
            name: "Contato",
        },
          {
           href: "/",
            name: "Suites",
        },
          {
           href: "/",
            name: "Localização",
        },
    ]

    const redes = [
        {
            icon: <FaWhatsapp className="text-[#F2F2F2] text-[20px]" />,
            href: "end",
        },
        {
            icon: <FaInstagram className="text-[#F2F2F2] text-[20px]" />,
            href: "tel"
        },
        {
            icon: <FaFacebook className="text-[#F2F2F2] text-[20px]" />,
            href: "mail"
        },
    ]

    return (
        <footer className="bg-[#899D82]  py-[50px]">
            <Container className={'flex'}>

                <div className="border-r-2 border-[#F2F2F2] w-[200px] pr- mr-[100px] flex items-center">
                    <Logo className={`h-[80px]`} />
                </div>

                <div className="flex justify-between w-full ">
                    <div className="flex flex-col items-center">
                        <h2 className="text-[#F2F2F2] text-[20px] font-bold">Pouso de Ícaro</h2>
                        {adress.map((ads, index) => (
                            <p key={index} className="text-[#F2F2F2] text-[16px]">{ads.name}</p>
                        ))}
                    </div>

                    <div className="flex flex-col items-center justify-center"> 
                        <h2 className="text-[#F2F2F2] text-[20px] font-bold ">Navegação</h2>
                        <ul className="flex flex-col gap-2 items-center ">
                            {navs.map((nav, index) => (
                                <li key={index}>
                                    <a href={nav.href} className="text-[#F2F2F2] text-[16px] hover:underline">{nav.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col items-center">
                        <h2 className="text-[#F2F2F2] text-[20px] font-bold">Redes Sociais</h2>
                        <div className="flex gap-4 mt-2">
                            {redes.map((rede, index) => (
                                <a key={index} href={rede.href} className="hover:text-[#F2F2F2] transition-colors duration-300">
                                    {rede.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;