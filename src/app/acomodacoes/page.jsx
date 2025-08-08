import ClientLoader from "@/components/ClientLoader";
import Whatsapp from "@/components/Whatsapp";
import AcomodacoesSection from "@/containers/AcomodacoesSection";
import Footer from "@/containers/Footer";

export const generateMetadata = () => {
    return {
        title: "Acomodações | Pouso de Ícaro",
        description:
            "Conheça nossas acomodações aconchegantes em Paraty. Quartos confortáveis, ambiente familiar e natureza ao redor.",
        keywords: [
            "Acomodações em Paraty",
            "Quartos de pousada",
            "Pousada em Paraty",
            "Hospedagem confortável",
        ],
        openGraph: {
            title: "Acomodações | Pouso de Ícaro",
            description:
                "Veja as acomodações da Pousada Pouso de Ícaro e escolha o quarto ideal para sua estadia.",
            images: [
                {
                    url: "/images/acomodacoes.jpg", 
                    width: 1200,
                    height: 630,
                    alt: "Foto do quarto da pousada",
                },
            ],
        },
    };
};

const PageAcomodacoes = () => {
    return (
        <div>
            <ClientLoader />
            <AcomodacoesSection />
            <Footer />
            <Whatsapp />
        </div>
    )
}

export default PageAcomodacoes;