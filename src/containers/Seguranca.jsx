import Container from "@/components/Container";
import { PiSecurityCameraFill } from "react-icons/pi";
import { LuArmchair } from "react-icons/lu";
import { MdSupportAgent } from "react-icons/md";
import "../app/globals.css";

const features = [
    { icon: LuArmchair, title: "AMBIENTE SILENCIOSO E FAMILIAR" },
    { icon: PiSecurityCameraFill, title: "ESTACIONAMENTO PRIVADO MONITORADO" },
    { icon: MdSupportAgent, title: "RECEPÇÃO 24 HORAS" },
];

const FeatureItem = ({ Icon, title, textSize = "text-[20px]", maxWidth = "md:max-w-[300px] max-w-[120px] " }) => (
    <span className="flex items-center gap-5 md:gap-3" role="listitem">
        <div
            className="text-[#FDFBFE] bg-[#899D82] rounded-full p-5 text-[35px]"
            aria-hidden="true"
        >
            <Icon />
        </div>
        <p className={`${textSize} ${maxWidth} text-[#20281D] font-[300]`}>{title}</p>
    </span>
);

const Seguranca = () => {

    const duplicatedFeatures = [...features, ...features];

    return (
        <section className="py-[80px]" aria-label="Segurança da pousada">
            <Container>
                {/* Mobile: Slider com animação */}
                <div className="block md:hidden overflow-hidden" role="list" aria-live="polite">
                    <div className="flex w-fit animate-slideMobile">
                        {duplicatedFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-6 px-6 flex-shrink-0"
                                role="listitem"
                            >
                                <div
                                    className="text-[#FDFBFE] bg-[#899D82] rounded-full p-5 text-[40px]"
                                    aria-hidden="true"
                                >
                                    <feature.icon />
                                </div>
                                <p className=" text-[17px] w-[120px] text-[#20281D] font-[300]">
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

export default Seguranca;
