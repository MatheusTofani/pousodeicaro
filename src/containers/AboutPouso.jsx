import Container from "@/components/Container";
import Line from "@/components/Line";

const AboutPouso = () => {
    return (
        <section
            aria-labelledby="about-title"
            role="region"
            className="pt-[180px] pb-[100px] px-5 md:px-0"
        >
            <Container className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Texto principal */}
                <div className="w-full md:w-[40%] flex flex-col">
                    <div className="flex justify-end">
                        <Line className="bg-[#20281D] mb-4" />
                    </div>
                    <h2
                        id="about-title"
                        className="text-[#20281D] text-[24px] md:text-[34px] font-light leading-tight text-center  "
                    >
                        CONHEÇA O,
                        <br />
                        <strong className="font-normal">POUSO DE ICARO</strong>
                    </h2>
                    <Line className="bg-[#899D82] mt-4" />
                </div>

                {/* Descrição */}
                <div className="w-full md:w-[50%] text-[#20281D] text-[18px] md:text-[20px] leading-relaxed">
                    <p className="mb-4">
                      A Pousada Pouso de Ícaro, em Paraty, une conforto, sofisticação e atendimento de excelência em um ambiente tranquilo e acolhedor. Com localização privilegiada, a pousada oferece suítes completas, piscina com área de lazer, sala de jogos e um clima de total privacidade e silêncio — ideal para quem busca descanso com exclusividade.
                    </p>

                </div>
            </Container>
        </section>
    );
};

export default AboutPouso;
