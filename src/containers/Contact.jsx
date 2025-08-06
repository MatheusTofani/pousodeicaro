import Container from "@/components/Container";
import Title from "@/components/Title";
import { FaWhatsapp } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { BsTelephoneOutboundFill } from "react-icons/bs";
const SectionContato = () => {

    const items = [
        {
            icon: <BsTelephoneOutboundFill className="text-[40px]" />,
            href: "tel:+552430380537",
            buttonText: "Nos ligue",
            name: "Nos ligue pelo telefone/celular",
        },
        {
            icon: <FaWhatsapp className="text-[40px]" />,
            href: "https://wa.me/552430380537",
            buttonText: "Enviar mensagem",
            name: "Nos chame pelo Whatsapp",
        },
        {
            icon: <CgMail className="text-[40px]" />,
            href: "mailto:junior@pousodeicaro.com",
            buttonText: "Enviar e-mail",
            name: "Nos mande um e-mail",
        },
    ];


    return (
        <section
            className="pt-[180px] pb-[80px] bg-[#FDFBFE]"
            id="contato"
            aria-label="Seção de contato"
        >
            <Title as="h2" className="text-center mb-10">
                Fale Conosco
            </Title>

            <Container className="p-5 md:p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <article
                            key={index}
                            className="bg-[#899D82] text-white rounded-2xl p-8 flex flex-col justify-between items-center text-center shadow-lg"
                        >
                            <div className="flex flex-col items-center gap-4">
                                {item.icon}
                                <p className="text-[20px] font-semibold">{item.name}</p>
                            </div>

                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.buttonText}
                                className="mt-6 inline-block bg-white text-[#20281D] px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
                            >
                                {item.buttonText}
                            </a>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default SectionContato;
