import Whatsapp from "@/components/Whatsapp";
import AboutPouso from "@/containers/AboutPouso";
import Footer from "@/containers/Footer";
import Header from "@/containers/Header";
import ImagesPouso from "@/containers/ImagesPouso";

export const generateMetadata = () => {
    return {
        title: "A Pousada | Pouso de Ícaro",
        description:
            "Conheça a Pousada Pouso de Ícaro em Paraty. Conforto, tranquilidade e a natureza de Paraty ao seu redor.",
        keywords: [
            "Pousada em Paraty",
            "Acomodações em Paraty",
            "Sobre a pousada Pouso de Ícaro",
            "Hospedagem em Paraty RJ",
        ],
        openGraph: {
            title: "A Pousada | Pouso de Ícaro",
            description:
                "Descubra mais sobre a Pousada Pouso de Ícaro e tudo que ela oferece para sua estadia em Paraty.",
            images: [
                {
                    url: "/images/pousada.jpg", 
                    width: 1200,
                    height: 630,
                    alt: "Fachada da Pousada Pouso de Ícaro em Paraty",
                },
            ],
        },
    };
};

const APousada = () => {
    return (
        <div>
            <Header />
            <AboutPouso />
            <ImagesPouso />
            <Footer />
            <Whatsapp />
        </div>
    )
}

export default APousada;    