"use client";

import { useState, useCallback } from "react";
import Container from "@/components/Container";
import Title from "@/components/Title";
import FaqItem from "../components/FaqItem";

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

    const toggleQuestion = useCallback(
        (index) => {
            setActiveIndex((current) => (current === index ? null : index));
        },
        []
    );

    return (
        <section className="py-[80px] p-5 md:p-[80px 0]">
            <Container>
                <Title variant="black" className="text-center mb-8">
                    PERGUNTAS FREQUENTES
                </Title>

                <div className="space-y-4 mt-[50px]">
                    {questions.map((item, index) => (
                        <FaqItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={activeIndex === index}
                            onToggle={toggleQuestion}
                            index={index}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Faq;
