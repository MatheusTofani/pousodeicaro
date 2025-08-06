import Container from "@/components/Container";
import Load from "@/components/svg";
import Title from "@/components/Title";
import { FaStar } from "react-icons/fa";

const Selo = () => {
  const score = [
    {
      nome: "Tripadvisor",
      nota: "4,7",
      max: "5",
      logo: "/selo/tripadvisor.jpg",
    },
    {
      nome: "Google",
      nota: "4,8",
      max: "5",
      logo: "/selo/google.png",
    },
    {
      nome: "Hoteis.com",
      nota: "8,6",
      max: "10",
      logo: "/selo/hoteis.png",
    },
    {
      nome: "Booking",
      nota: "8,3",
      max: "10",
      logo: "/selo/booking.jfif",
    },
  ];

  // Duplicar para animação infinita no mobile
  const duplicatedScores = [...score, ...score];

  return (
    <div className="py-[80px]">
      <Title>NOSSOS SELOS E AVALIAÇÕES</Title>

      <Container className="mt-[80px] text-center">
        {/* Mobile: Slider responsivo */}
        <div className="block md:hidden overflow-hidden" aria-live="polite">
          <div className="flex w-fit animate-slideMobile gap-10 px-4">
            {duplicatedScores.map((scores, index) => (
              <div key={index} className="flex-shrink-0 text-center w-[140px]">
                <img
                  className="rounded-full w-[100px] mx-auto mb-[10px]"
                  src={scores.logo}
                  alt={scores.nome}
                />
                <div className="flex justify-center items-center text-[25px] gap-2 text-[#20281D]">
                  <FaStar className="text-[20px]" />
                  <p>
                    <span className="font-bold">{scores.nota}</span>/{scores.max}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Layout fixo */}
        <div className="hidden md:flex justify-around">
          {score.map((scores, index) => (
            <div key={index} className="text-center">
              <img
                className="rounded-full w-[100px] mb-[10px]"
                src={scores.logo}
                alt={scores.nome}
              />
              <div className="flex justify-center items-center text-[25px] gap-2 text-[#20281D]">
                <FaStar className="text-[20px]" />
                <p>
                  <span className="font-bold">{scores.nota}</span>/{scores.max}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[80px] text-[#20281D] font-bold text-[20px]">
          Reserve sem medo! Se não ficar satisfeito, devolvemos 100% do valor da hospedagem.
        </div>
      </Container>
    </div>
  );
};

export default Selo;
