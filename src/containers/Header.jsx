"use client";

import { useEffect, useState } from "react";
import Container from "@/components/Container";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { usePathname } from "next/navigation";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  const Navs = [
    { name: "Inicio", href: "/" },
    { name: "A Pousada", href: "/a-pousada" },
    { name: "Acomodações", href: "/acomodacoes" },
    { name: "Café", href: "/cafe" },
    { name: "Contato", href: "/contato" },
  ];

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#FDFBFE] shadow-md" : "bg-transparent"
        }`}
    >
      <Container className="flex items-center justify-between h-[80px] transition-all p-5 md:p-0">
        <Logo className={`h-[60px]`} />

        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {Navs.map((nav) => (
              <li key={nav.name}>
                <a
                  href={nav.href}
                  className={`transition-colors duration-300 hover:text-[#899D82] ${scrolled ? "text-[#20281D]" : "text-[#FDFBFE]"
                    }`}
                >
                  {nav.name}
                </a>
              </li>
            ))}
            <li>
              <a
                aria-label="Faça sua reserva agora"
                target="_blank"
                rel="noopener noreferrer"
                href="https://hotels.cloudbeds.com/pt-br/reservas/BF2NIc?currency=brl"
                className={`inline-block px-6 py-3 rounded-full font-medium transition ${scrolled
                  ? "text-[#FDFBFE] bg-[#899D82] hover:bg-[#7a8f74]"
                  : "text-[#20281D] bg-[#FDFBFE] hover:bg-gray-200"
                  }`}
              >
                Reservar
              </a>
            </li>
          </ul>
        </nav>

        {/* Botão Hamburguer */}
        <button
          className={`md:hidden z-50 transition-colors duration-300 ${scrolled ? "text-black" : "text-white"
            }`}
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={28} className="text-[#20281D]" /> : <Menu size={28} />}
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
            <a
              aria-label="Faça sua reserva agora"
              target="_blank"
              rel="noopener noreferrer"
              href="https://hotels.cloudbeds.com/pt-br/reservas/BF2NIc?currency=brl"
              className="inline-block px-6 py-3 rounded-full font-medium transition bg-[#899D82] hover:bg-[#809D82] text-[#FDFBFE]"
            >
              Reservar
            </a>
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;
