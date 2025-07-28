"use client";

import Container from "@/components/Container";
import Title from "@/components/Title";
import { useState } from "react";

const Faq = () => {
    const questions = [
        {
            question: "Qual é o horário de check-in e check-out?",
            answer: "O horário de check-in é às 14h e o check-out é às 12h.",
        },
        {
            question: "A pousada oferece café da manhã?",
            answer: "Sim, a pousada oferece café da manhã incluso na diária.",
        },
        {
            question: "Há estacionamento disponível?",
            answer: "Sim, a pousada possui estacionamento gratuito para os hóspedes.",
        },
        {
            question: "A pousada aceita animais de estimação?",
            answer: "Sim, aceitamos animais de estimação sob consulta prévia.",
        },
        {
            question: "Quais são as formas de pagamento aceitas?",
            answer: "Aceitamos cartões de crédito, débito e pagamentos via PIX.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleQuestion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-[80px] p-5 md:p-[80px 0]">
            <Container>
                <Title variant="black" className="text-center mb-8">
                    PERGUNTAS FREQUENTES
                </Title>

                <div className="space-y-4 mt-[50px]">
                    {questions.map((item, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className="bg-[#20281D] rounded-lg"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleQuestion(index)}
                                    aria-expanded={isOpen}
                                    className="w-full text-left px-6 py-4 cursor-pointer text-white flex justify-between items-center"
                                >
                                    <h3 className="text-base sm:text-lg md:text-xl font-medium">
                                        {item.question}
                                    </h3>
                                    <span className="text-xl">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 px-6 ${isOpen ? "max-h-40 pb-4" : "max-h-0"
                                        }`}
                                >
                                    <p className="text-sm sm:text-base text-white">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default Faq;
