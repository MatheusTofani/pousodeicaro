import Image from "next/image";
import Link from "next/link";
import acomodacoes from "@/data/acomodacoes";
import Container from "@/components/Container";
import Title from "@/components/Title";
import Header from "./Header";

const AcomodacoesSection = () => {
    return (
        <section className="px-5 md:px-[0] py-20 bg-[#FDFBFE] text-[#20281D]">
            <Header />
            <Container className={"mt-[80px]"}>
                <Title className={"mb-[80px]"}>
                    Nossas Acomodações
                </Title>

                <div className="space-y-12">
                    {acomodacoes.map((acomodacao, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row items-center gap-8 md:gap-14"
                        >
                            {/* Imagem à esquerda */}
                            <div className="w-full md:w-1/2 h-[350px] relative rounded-xl overflow-hidden shadow-md">
                                <Image
                                    src={acomodacao.images.image1}
                                    alt={acomodacao.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Texto à direita */}
                            <div className="w-full md:w-1/2">
                                <h3 className="text-2xl font-semibold mb-3">{acomodacao.name}</h3>
                                <p className="mb-5 leading-relaxed">{acomodacao.description}</p>

                                <Link href={`/acomodacoes/${acomodacao.slug}`}>
                                    <button  className="w-full md:w-auto bg-[#899D82] text-[#FDFBFE] px-6 py-3 rounded-full hover:bg-[#7a8f74] duration-300 cursor-pointer transition-colors">
                                        Ver mais
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default AcomodacoesSection;
