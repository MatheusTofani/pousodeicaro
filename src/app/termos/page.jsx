import ClientLoader from "@/components/ClientLoader";
import Whatsapp from "@/components/Whatsapp";
import Footer from "@/containers/Footer";
import Header from "@/containers/Header";
import TermosSection from "@/containers/Termos";

export const generateMetadata = () => {
    return {
        title: "Termos e Condições | Pouso de Ícaro",
        description: "Leia os termos e condições da Pousada Pouso de Ícaro em Paraty. Informações importantes sobre uso do site e serviços.",
        keywords: [
            "Termos e condições",
            "Política da pousada",
            "Pousada Pouso de Ícaro",
            "Paraty",
        ],
        openGraph: {
            title: "Termos e Condições | Pouso de Ícaro",
            description: "Leia os termos e condições da Pousada Pouso de Ícaro em Paraty. Informações importantes sobre uso do site e serviços.",
            url: "https://seudominio.com/termos",
        },
    };
};

const Termos = () => {
    return (
        <div>
            <ClientLoader />
            <Whatsapp />
            <Header />
            <TermosSection />
            <Footer />
        </div>
    )
}

export default Termos;