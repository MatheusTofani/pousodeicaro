import Container from "@/components/Container";
import Line from "@/components/Line";

const AboutCoffee = () => {
    return (
        <section
            aria-labelledby="about-title"
            role="region"
            className="pt-[130px] mb-[50px] px-5 md:px-0"
        >
            <Container className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Texto principal */}
                <div className="w-full md:w-[40%] flex flex-col">
                    <div className="flex justify-end">
                        <Line className="bg-[#20281D] mb-4" />
                    </div>
                    <h2
                        id="about-title"
                        className="text-[#20281D] text-[24px] md:text-[34px] font-light leading-tight text-center md:text-left"
                    >
                        SAIBA MAIS SOBRE O,
                        <br />
                        <strong className="font-normal">CAFÉ DA MANHÃ</strong>
                    </h2>
                    <Line className="bg-[#899D82] mt-4" />
                </div>

                {/* Descrição */}
                <div className="w-full md:w-[50%] text-[#20281D] text-[18px] md:text-[20px] leading-relaxed">
                    <p className="mb-4">
                      Comece seu dia com um delicioso café da manhã preparado com carinho. Servimos um buffet completo com uma seleção irresistível de pães fresquinhos, tortas salgadas caseiras, frutas da estação, bolos, cereais, frios e muito mais.

Além disso, oferecemos opções à la carte preparadas na hora, como ovos mexidos, tapiocas e outras delícias feitas especialmente para você.

Tudo servido em um ambiente acolhedor e iluminado, com variedade, qualidade e aquele toque caseiro que faz toda a diferença.
                    </p>

                </div>
            </Container>
        </section>
    );
};

export default AboutCoffee;
