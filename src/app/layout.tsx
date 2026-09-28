import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Sinan Yıldırım | Private Hair Atelier",
  description: "Evinizin konforunda, size özel kişiselleştirilmiş premium saç tasarım ve şekillendirme hizmeti. Bekleme yok, salon gürültüsü yok.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body-regular antialiased bg-surface text-on-surface selection:bg-secondary selection:text-on-secondary">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
