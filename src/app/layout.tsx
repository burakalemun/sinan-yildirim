import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Sinan Yıldırım | Private Hair Atelier",
  description: "Personalized premium hair design and styling service in the comfort of your home. No waiting lines, no salon noise.",
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
