import ClientLoader from "@/components/ClientLoader";
import Whatsapp from "@/components/Whatsapp";
import AcomodacoesSection from "@/containers/AcomodacoesSection";
import Footer from "@/containers/Footer";

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