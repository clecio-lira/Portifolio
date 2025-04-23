import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import FooterComponent from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "CL | Portifólio",
  description: "Portifólio de Clécio Lira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body>
        <Header />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
