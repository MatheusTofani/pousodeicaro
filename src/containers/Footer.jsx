import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsapp, FaInstagram, FaGoogle } from "react-icons/fa";
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
            icon: <FaGoogle className=" text-[20px]" />,
            href: "https://www.google.com/travel/search?q=pouso%20de%20icaro&g2lb=4899568%2C4899570%2C4965990%2C4969803%2C72302247%2C72317059%2C72414906%2C72471280%2C72472051%2C72485658%2C72560029%2C72573224%2C72616120%2C72647020%2C72648289%2C72686036%2C72760082%2C72803964%2C72832976%2C72882230%2C72958624%2C72959983%2C72990341&hl=pt-BR&gl=br&cs=1&ssta=1&ts=CAEaRQonEiUyIzB4OWQ2ZGZmZTE5MTk1ODk6MHg3NGE3MTY2MWIxOTY4NzU4EhoSFAoHCOkPEAkYARIHCOkPEAkYAhgBMgIQAA&qs=CAEyE0Nnb0kySTdhakp2TXhkTjBFQUU4AkIJCViHlrFhFqd0QgkJWIeWsWEWp3Q&ap=ugEGcHJpY2Vz&ved=0CAAQ5JsGahcKEwiIhL-n_PaOAxUAAAAAHQAAAAAQBA&ictx=111",
            label: "Veja no google"
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