import type { Metadata } from "next";
import { Archivo, Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const poppins = Poppins({
  variable: "--font-poppins-face",
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat-face",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "SKE Plus",
  description:
    "SKE Plus offers trucking and mechanic services. Ask about a haul, an engine repair, or both.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} ${poppins.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
