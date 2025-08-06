import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Title from "@/components/Title";
import Header from "./Header";
import restaurantes from "@/data/restaurantes";
import { TbMapPins } from "react-icons/tb";

const Restaurantes = () => {
    return (
        <section className="py-20 bg-[#FDFBFE] text-[#20281D] px-5 md:px-[0] ">
            <Header />
            <Container className={"mt-[80px]"}>
                <Title className={"mb-[80px]"}>
                    Restaurantes Proximos
                </Title>

                <div className="space-y-12">
                    {restaurantes.map((restaurante, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row items-center gap-8 md:gap-14"
                        >
                            {/* Imagem à esquerda */}
                            <div className="w-full md:w-1/2 h-[350px] relative rounded-xl overflow-hidden shadow-md">
                                <Image
                                    src={restaurante.image}
                                    alt={restaurante.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Texto à direita */}
                            <div className="w-full md:w-1/2">
                                <h3 className="text-2xl font-semibold mb-3">{restaurante.name}</h3>
                                <p className="mb-5 leading-relaxed">{restaurante.desc}</p>
<p className="text-[20px] font-bold flex items-center gap-2"><TbMapPins /> {restaurante.distance} da pousada</p>
                                <Link href={restaurante.href}>
                                    <button  className="w-full md:w-auto bg-[#899D82] mt-[20px] text-[#FDFBFE] px-6 py-3 rounded-full hover:bg-[#7a8f74] duration-300 cursor-pointer transition-colors">
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

export default Restaurantes;
