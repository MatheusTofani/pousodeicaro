import Whatsapp from "@/components/Whatsapp";
import AboutCoffee from "@/containers/AboutCoffee";
import Footer from "@/containers/Footer";
import Header from "@/containers/Header";
import ImagesCoffee from "@/containers/ImagesCoffee";

export const generateMetadata = () => {
  return {
    title: "Café da Manhã | Pouso de Ícaro",
    description:
      "Descubra o delicioso café da manhã da Pousada Pouso de Ícaro em Paraty: frutas frescas, pães caseiros, sucos naturais e muito mais.",
    keywords: [
      "Café da manhã em Paraty",
      "Pousada com café da manhã",
      "Hospedagem em Paraty",
      "Café da manhã Pouso de Ícaro",
    ],
    openGraph: {
      title: "Café da Manhã | Pouso de Ícaro",
      description:
        "Descubra o delicioso café da manhã da Pousada Pouso de Ícaro em Paraty.",
      images: [
        {
          url: "/images/cafe-da-manha.jpg", 
          width: 1200,
          height: 630,
          alt: "Café da manhã na Pousada Pouso de Ícaro",
        },
      ],
    },
  };
};

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