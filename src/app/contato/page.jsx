import ClientLoader from "@/components/ClientLoader"
import Whatsapp from "@/components/Whatsapp"
import SectionContato from "@/containers/Contact"
import Faq from "@/containers/Faq"
import Footer from "@/containers/Footer"
import Header from "@/containers/Header"
import Map from "@/containers/Map"

export const generateMetadata = () => {
    return {
        title: "Contato | Pouso de Ícaro",
        description:
            "Entre em contato com a Pousada Pouso de Ícaro em Paraty para tirar dúvidas, fazer reservas ou obter mais informações.",
        keywords: [
            "Contato Pouso de Ícaro",
            "Pousada em Paraty",
            "Fale conosco",
            "Reservar pousada Paraty",
            "Hospedagem em Paraty",
        ],
        openGraph: {
            title: "Contato | Pouso de Ícaro",
            description:
                "Fale com a equipe da Pousada Pouso de Ícaro em Paraty. Estamos à disposição para esclarecer dúvidas e ajudar na sua reserva.",
            images: [
                {
                    url: "/images/contato.jpg", // ajuste conforme necessário
                    width: 1200,
                    height: 630,
                    alt: "Imagem da pousada em Paraty",
                },
            ],
        },
    };
};

const Contato = () => {
    return (
        <div>
            <ClientLoader />
            <Header />
            <SectionContato />
            <Map />
            <Faq />
            <Footer />
            <Whatsapp />
        </div>
    )
}

export default Contato;