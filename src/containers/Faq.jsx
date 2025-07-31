"use client";

import { useState, useCallback } from "react";
import Container from "@/components/Container";
import Title from "@/components/Title";
import FaqItem from "../components/FaqItem";

const Faq = () => {
    const questions = [
        {
            question: "Qual é o horário de check-in e check-out?",
            answer: "Check-in: a partir das 14h, Check-out: até às 12h.",
        },
        {
            question: "A pousada oferece café da manhã?",
            answer: "Sim, a pousada oferece um delicioso café da manhã incluso na diária.",
        },
        {
            question: "Há estacionamento disponível?",
            answer: "Sim, temos estacionamento gratuito disponível para os hóspedes.",
        },
        {
            question: "A pousada aceita animais de estimação?",
            answer: "Sim, animais de pequeno porte são bem-vindos! (Confirme previamente com a recepção.)",
        },
        {
            question: "Quais são as formas de pagamento aceitas?",
            answer: "Aceitamos: dinheiro, cartão de crédito/débito, Pix e transferência bancária.",
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
