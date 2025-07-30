import Whatsapp from "@/components/Whatsapp";
import AboutCoffee from "@/containers/AboutCoffee";
import Footer from "@/containers/Footer";
import Header from "@/containers/Header";
import ImagesCoffee from "@/containers/ImagesCoffee";

const Cafe = () => {
    return (
      <div>
        <Header /> 
        <AboutCoffee />
        <ImagesCoffee />
        <Footer />
        <Whatsapp />
      </div>
    )
}

export default Cafe;