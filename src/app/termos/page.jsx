import ClientLoader from "@/components/ClientLoader";
import Whatsapp from "@/components/Whatsapp";
import Footer from "@/containers/Footer";
import Header from "@/containers/Header";
import TermosSection from "@/containers/Termos";

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