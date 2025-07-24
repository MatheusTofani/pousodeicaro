import Container from "@/components/Container";
import { FiCoffee } from "react-icons/fi";
import { FaWifi } from "react-icons/fa";
import { MdOutlinePool } from "react-icons/md";
import { BiMedal } from "react-icons/bi";
import "../app/globals.css";

const Diferenciais = () => {
  const features = [
    {
      icon: <FiCoffee />,
      title: "CAFÉ DA MANHÃ",
    },
    {
      icon: <FaWifi />,
      title: "WI-FI GRÁTIS",
    },
    {
      icon: <BiMedal />,
      title: "MELHOR AVALIADO",
    },
    {
      icon: <MdOutlinePool />,
      title: "PISCINA",
    },

  ];

  // Duplica os itens para efeito contínuo no slider
  const duplicatedFeatures = [...features, ...features];

  return (
    <section className="py-[80px]">
      <Container>
        {/* Mobile: Slider com animação */}
        <div className="block md:hidden overflow-hidden">
          <div className="flex w-fit animate-slideMobile">
            {duplicatedFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 px-6 flex-shrink-0">
                <div className="text-[#FDFBFE] bg-[#899D82] rounded-full p-5 text-[40px]">
                  {feature.icon}
                </div>
                <p className="text-[20px] w-[120px] text-[#20281D] font-[300]">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Layout estático */}
        <div className="hidden md:flex items-center justify-between ">
          {features.map((feature, index) => (
            <span key={index} className="flex items-center gap-3">
              <div className="text-[#FDFBFE] bg-[#899D82] rounded-full p-5 text-[40px]">
                {feature.icon}
              </div>
              <p className="text-[25px] max-w-[120px] text-[#20281D] font-[300]">
                {feature.title}
              </p>
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Diferenciais;
