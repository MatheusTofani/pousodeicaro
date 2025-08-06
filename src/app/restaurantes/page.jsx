import ClientLoader from "@/components/ClientLoader";
import Whatsapp from "@/components/Whatsapp";
import Footer from "@/containers/Footer";
import Restaurantes from "@/containers/Restaurantes";

export const generateMetadata = () => {
    return {
        title: "Restaurantes | Pouso de Ícaro",
        description:
            "Explore os melhores restaurantes próximos à pousada Pouso de Ícaro em Paraty. Dicas de culinária local, gastronomia e experiências imperdíveis.",
        keywords: [
            "Restaurantes em Paraty",
            "Onde comer em Paraty",
            "Pouso de Ícaro restaurantes",
            "Dicas de restaurantes Paraty",
        ],
        openGraph: {
            title: "Restaurantes | Pouso de Ícaro",
            description:
                "Conheça os restaurantes recomendados perto da pousada Pouso de Ícaro em Paraty.",
            images: [
                {
                    url: "/images/restaurantes.jpg", 
                    width: 1200,
                    height: 630,
                    alt: "Restaurantes em Paraty próximos à pousada",
                },
            ],
        },
    };
};

const PageRestaurantes = () => {
    return (
        <div>
            <ClientLoader />
            <Restaurantes />
            <Footer />
            <Whatsapp />
        </div>
    )
}

export default PageRestaurantes;