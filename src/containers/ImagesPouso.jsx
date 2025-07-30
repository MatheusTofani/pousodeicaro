"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Container from "@/components/Container";

const ImagesPouso = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });

    const images = [
        { image: "image1.jpg" },
        { image: "image2.jpg" },
        { image: "image3.jpg" },
        { image: "image4.jpg" },
        { image: "image5.jpg" },
        { image: "image6.jpg" },
        { image: "image7.jpg" },
        { image: "image8.jpg" },
        { image: "image9.jpg" },
    ];

    return (
        <Container>
            <div
                ref={containerRef}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 pb-[100px]"
            >
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="w-full h-[500px] relative overflow-hidden rounded-lg shadow-lg"
                    >
                        <Image
                            src={`/pousada/${img.image}`}
                            alt={`Pouso ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            priority={index === 0}
                        />
                    </motion.div>
                ))}
            </div>
        </Container>
    );
};

export default ImagesPouso;
