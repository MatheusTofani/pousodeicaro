"use client";

import { useEffect, useState } from "react";
import Container from "@/components/Container";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const Navs = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/about" },
    { name: "Serviços", href: "/services" },
    { name: "Contato", href: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
        scrolled ? "bg-[#FDFBFE] shadow-md" : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between h-[80px] transition-all p-5 md:p-0">
       <Logo className={`h-[60px]`}/>

        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {Navs.map((nav) => (
              <li key={nav.name}>
                <a
                  href={nav.href}
                  className={`transition-colors duration-300 hover:underline ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão Hamburguer */}
        <button
          className={`md:hidden z-50 transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Mobile */}
        {menuOpen && (
          <nav className="absolute top-0 left-0 w-full h-screen bg-[#FDFBFE] text-black flex flex-col items-center justify-center gap-6 text-xl md:hidden">
            {Navs.map((nav) => (
              <a
                key={nav.name}
                href={nav.href}
                onClick={toggleMenu}
                className="hover:underline transition"
              >
                {nav.name}
              </a>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;
