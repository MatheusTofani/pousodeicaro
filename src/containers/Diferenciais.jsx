import Container from "@/components/Container";
import { FiCoffee } from "react-icons/fi";
import { FaWifi } from "react-icons/fa";
import { MdOutlinePool } from "react-icons/md";
import { BiMedal, BiSolidCarGarage } from "react-icons/bi";
import "../app/globals.css";

const features = [
  { icon: FiCoffee, title: "CAFÉ DA MANHÃ" },
  { icon: BiSolidCarGarage, title: "GARAGEM" },
  { icon: BiMedal, title: "MELHOR AVALIADO" },
  { icon: MdOutlinePool, title: "PISCINA" },
];

const FeatureItem = ({ Icon, title, textSize = "text-[25px]", maxWidth = "max-w-[120px]" }) => (
  <span className="flex items-center gap-3" role="listitem">
    <div
      className="text-[#FDFBFE] bg-[#899D82] rounded-full p-5 text-[40px]"
      aria-hidden="true"
    >
      <Icon />
    </div>
    <p className={`${textSize} ${maxWidth} text-[#20281D] font-[300]`}>{title}</p>
  </span>
);

const Diferenciais = () => {
  // Duplica os itens para o slider móvel
  const duplicatedFeatures = [...features, ...features];

  return (
    <section className="py-[80px]" aria-label="Diferenciais da pousada">
      <Container>
        {/* Mobile: Slider com animação */}
        <div className="block md:hidden overflow-hidden" role="list" aria-live="polite">
          <div className="flex w-fit animate-slideMobile">
            {duplicatedFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 flex-shrink-0"
                role="listitem"
              >
                <div
                  className="text-[#FDFBFE] bg-[#899D82] rounded-full p-5 text-[40px]"
                  aria-hidden="true"
                >
                  <feature.icon />
                </div>
                <p className="text-[20px] w-[120px] text-[#20281D] font-[300]">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Layout estático */}
        <div className="hidden md:flex items-center justify-between" role="list">
          {features.map(({ icon, title }, index) => (
            <FeatureItem key={index} Icon={icon} title={title} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Diferenciais;
