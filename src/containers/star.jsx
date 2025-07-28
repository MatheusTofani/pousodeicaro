import Container from "@/components/Container";
import Title from "@/components/Title";
import { FaStar } from "react-icons/fa";

const Star = () => {
    const rating = [
        {
            name: "Julia",
            country: "Brasil",
            rating: 10,
            comment:
                "Super recomendo, ótima localização, perto da rodoviária e do centro histórico. A recepção dos funcionários, todos mundo atenciosos.",
        },
        {
            name: "Cinthia1705",
            country: "Brasil",
            rating: 10,
            comment: "Eu gostei de tudo, mas principalmente da equipe e do café da manhã.",
        },
        {
            name: "Sarah",
            country: "Reino Unido",
            rating: 10,
            comment:
                "Uma recepção fantástica da equipe, que sempre se esforçou para nos fazer sentir confortáveis, dando ótimos conselhos e muitas informações sobre o que fazer. A uma curta caminhada do centro histórico, não poderia estar mais perto da estação rodoviária. Também um maravilhoso café da manhã tradicionalmente brasileiro para começar o dia. Recomendaria com certeza!",
        },
        {
            name: "Mauricio",
            country: "Chile",
            rating: 10,
            comment: "Café da manhã com opção de pedir um sanduíche preparado na hora. Boa internet.",
        },
    ];

    // Duplica para efeito contínuo
    const duplicatedRating = [...rating, ...rating];

    return (
        <section className="py-[120px] px-5 md:px-[0]">
            <Container className="flex flex-col items-center justify-center">
                <Title variant="black" className={"text-center"}>O QUE NOSSOS HÓSPEDES FALAM</Title>

                {/* Mobile: animação horizontal */}
                <div className="block lg:hidden overflow-hidden w-full mt-10">
  <div className="flex w-fit animate-slideMobile">
    {duplicatedRating.map((rat, index) => (
      <article
        key={index}
        className="w-[280px] flex-shrink-0 px-4 text-[#20281D] text-center"
      >
        <header className="flex justify-center gap-2 text-[20px] mb-2">
          <h3 className="border-r pr-2">{rat.name}</h3>
          <span className="font-bold">{rat.country}</span>
        </header>

        <blockquote className="italic font-[300] text-[16px] leading-relaxed mb-4">
          “{rat.comment}”
        </blockquote>

        <div className="flex justify-center items-center text-[20px] gap-2">
          <FaStar />
          <p className="font-[300]">
            <span className="font-bold">{rat.rating}</span>/10
          </p>
        </div>
      </article>
    ))}
  </div>
</div>


                {/* Desktop: grid estático */}
                <div className="hidden lg:flex flex-wrap justify-between mt-10 text-[#20281D] w-full">
                    {rating.map((rat, index) => (
                        <article
                            key={index}
                            className="flex flex-col items-center w-[22%] gap-4 text-center"
                        >
                            <header className="flex gap-2 text-[22px]">
                                <h3 className="border-r pr-2">{rat.name}</h3>
                                <span className="font-bold">{rat.country}</span>
                            </header>

                            <blockquote className="italic font-[300] text-[18px] leading-relaxed">
                                “{rat.comment}”
                            </blockquote>

                            <div className="flex items-center text-[25px] gap-2">
                                <FaStar />
                                <p className="font-[300]">
                                    <span className="font-bold">{rat.rating}</span>/10
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Star;
