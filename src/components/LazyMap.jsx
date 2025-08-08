"use client";
import { useEffect, useRef, useState } from "react";

const LazyMap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="w-full md:w-[500px] aspect-square rounded-[20px] overflow-hidden bg-gray-200"
    >
      {isVisible && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.555660372387!2d-44.720717024557715!3d-23.222858549243714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9d6dffe1919589%3A0x74a71661b1968758!2sPouso%20de%20%C3%8Dcaro%20POUSADA%20EM%20PARATY!5e0!3m2!1spt-BR!2sbr!4v1753386212561!5m2!1spt-BR!2sbr"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da Pousada Pouso de Ícaro em Paraty"
        />
      )}
    </div>
  );
};

export default LazyMap;
