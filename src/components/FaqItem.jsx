"use client";

import { useRef, useState, useEffect } from "react";

const FaqItem = ({ question, answer, isOpen, onToggle, index }) => {
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState("0px");

    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
        }
    }, [isOpen]);

    return (
        <div className="bg-[#20281D] rounded-lg">
            <button
                type="button"
                onClick={() => onToggle(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-content-${index}`}
                id={`faq-button-${index}`}
                className="w-full text-left px-6 py-4 cursor-pointer text-white flex justify-between items-center"
            >
                <h3 className="text-base sm:text-lg md:text-xl font-medium">{question}</h3>
                <span className="text-xl">{isOpen ? "−" : "+"}</span>
            </button>

            <div
                id={`faq-content-${index}`}
                role="region"
                aria-labelledby={`faq-button-${index}`}
                ref={contentRef}
                style={{
                    maxHeight,
                    transition: "max-height 0.3s ease",
                    overflow: "hidden",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    paddingBottom: isOpen ? "1rem" : "0",
                }}
            >
                <p className="text-sm sm:text-base text-white">{answer}</p>
            </div>
        </div>
    );
};

export default FaqItem;
