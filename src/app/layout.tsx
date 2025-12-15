import "~/styles/globals.css";

import { Inter } from "next/font/google";

import type { Metadata } from "next";

interface Properties {
    children: React.ReactNode;
}

const INTER = Inter({
    display: "swap",
    subsets: ["latin"],
});
export const metadata: Metadata = {
    description: "Barebones integration of Calendy within a NextJS application",
    title: "Next Calendly Example",
};

export default function RootLayout(properties: Properties) {
    return (
        <html className={INTER.className} lang="en">
            <body>{properties.children}</body>
        </html>
    );
}
