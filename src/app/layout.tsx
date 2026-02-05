import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "IntentUI - Your Interface, Generated from Intent",
    description: "An intent-driven generative interface powered by Tambo. Describe what you want to do, and the UI adapts to you.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
