import ClientLoader from "@/components/ClientLoader";
import Whatsapp from "@/components/Whatsapp";
import Footer from "@/containers/Footer";
import Restaurantes from "@/containers/Restaurantes";

const PageAcomodacoes = () => {
    return (
        <div>
            <ClientLoader />
            <Restaurantes />
            <Footer />
            <Whatsapp />
        </div>
    )
}

export default PageAcomodacoes;