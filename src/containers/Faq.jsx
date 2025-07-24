"use client";

import Container from "@/components/Container";
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
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleQuestion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-[80px]">
            <Container>
                <div className="space-y-4">
                    {questions.map((item, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className="bg-[#20281D] rounded-lg px-6 py-4 cursor-pointer text-white"
                                onClick={() => toggleQuestion(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-medium">
                                        {item.question}
                                    </h3>
                                    <span className="text-xl">{isOpen ? "−" : "+"}</span>
                                </div>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        isOpen ? "max-h-40 mt-3" : "max-h-0"
                                    }`}
                                >
                                    <p className="text-sm">{item.answer}</p>
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
