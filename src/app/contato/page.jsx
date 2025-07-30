import ClientLoader from "@/components/ClientLoader"
import Whatsapp from "@/components/Whatsapp"
import SectionContato from "@/containers/Contact"

const { default: Footer } = require("@/containers/Footer")
const { default: Header } = require("@/containers/Header")
const { default: Map } = require("@/containers/Map")

const Contato = () => {
return (
    <div>
        <ClientLoader />
        <Header />
        <SectionContato />
        <Map />
        <Footer />
        <Whatsapp />
    </div>
)
}

export default Contato;