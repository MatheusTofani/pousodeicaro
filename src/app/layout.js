import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
   title: "Pouso de Ícaro | Pousada em Paraty com Conforto",
  description:"Pouso de Ícaro: hospedagem em Paraty cercada pela natureza, com conforto, tranquilidade e fácil acesso às praias e ao centro histórico.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
