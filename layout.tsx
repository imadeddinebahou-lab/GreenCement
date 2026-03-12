import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "TerfayaGreen Cement | L'Industrie Proposée par la Nature",
    description: "Unité de production de ciment stratégique à Terfaya, alliant performance industrielle de pointe et électricité 100% renouvelable.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className="scroll-smooth">
            <body
                className={`${inter.variable} ${outfit.variable} antialiased bg-dark-900 text-slate-100 font-sans selection:bg-primary-500/30`}
            >
                {children}
            </body>
        </html>
    );
}
