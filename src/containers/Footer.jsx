import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { IoMdMail, IoMdPin } from "react-icons/io";


const Footer = () => {

    const adress = [
        {
            icon: <IoMdPin className="text-[30px]" />,
            name: "R. Waldemar Mathias, 169 - Parque Imperial, Paraty - RJ, 23970-000",
        },
        {
            icon: <BsFillTelephoneFill   />,
            name: "+55 (24) 3038-0537"
        },
        {
            icon: <IoMdMail />,
            name: "junior@pousodeicaro.com"
        },
    ]

    const navs = [
        {
            href: "/termos",
            name: "Termos",
        },
        {
           href: "/cafe",
            name: "Café",
        },
        {
           href: "/contato",
            name: "Contato",
        },
          {
           href: "/acomodacoes",
            name: "Acomodações",
        },
          {
           href: "/a-pousada",
            name: "A pousada",
        },
    ]

    const redes = [
        {
            icon: <FaWhatsapp className=" text-[20px]" />,
            href: "https://wa.me/552430380537",
            label: "Converse pelo WhatsApp"
        },
        {
            icon: <FaInstagram className=" text-[20px]" />,
            href: "https://www.instagram.com/pousodeicaro/",
            label: "Siga no Instagram"
        },
        {
            icon: <FaFacebook className=" text-[20px]" />,
            href: "mail",
            label: "Curta no Facebook"
        },
    ]

    return (
       <footer className="bg-[#899D82] py-[50px] mt-[80px]">
    <Container className="flex flex-col md:flex-row p-5 md:p-[0]">
        {/* Logo Section - agora fica acima em mobile */}
        <div className=" md:border-r-2 md:border-b-0 border-[#FDFBFE] w-full md:w-[200px] pb-5 md:pb-0 md:pr-5 md:mr-[100px] flex justify-center md:justify-start md:items-center mb-5 md:mb-0">
            <Logo className="h-[80px] md:h-[100px]" />
        </div>

        {/* Content Sections - empilhadas em mobile */}
        <div className="flex flex-col md:flex-row justify-between w-full gap-8 md:gap-0">
            {/* Address Section */}
            <div className="flex flex-col items-center md:items-start md:w-[400px] gap-4">
                <h2 className="text-[#FDFBFE] text-[20px] font-bold mb-2">Pouso de Ícaro</h2>
                {adress.map((ads, index) => (
                    
                    <p key={index} className="flex items-center gap-2 text-[#FDFBFE] text-[16px] text-center md:text-left">
                        {ads.icon} 
                        {ads.name}
                        </p>
                ))}
            </div>

            {/* Navigation Section */}
            <div className="flex flex-col items-center"> 
                <h2 className="text-[#FDFBFE] text-[20px] font-bold mb-2">Navegação</h2>
                <ul className="flex flex-col gap-2 items-center">
                    {navs.map((nav, index) => (
                        <li key={index}>
                            <a href={nav.href} className="text-[#FDFBFE] text-[16px] hover:underline">{nav.name}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Social Media Section */}
            <div className="flex flex-col items-center">
                <h2 className="text-[#FDFBFE] text-[20px] font-bold mb-2">Redes Sociais</h2>
                <div className="flex gap-4">
                    {redes.map((rede, index) => (
                        <a key={index} href={rede.href}  aria-label={rede.label} target="_blank" rel="noopener noreferrer" className="hover:text-[#FDFBFE80] text-[#FDFBFE] transition-colors duration-300">
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