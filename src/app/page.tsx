"use client";

import { TamboProvider } from "@tambo-ai/react";
import { tamboComponents, tamboTools } from "@/lib/tambo";
import IntentInterface from "@/components/IntentInterface";

export default function Home() {
    return (
        <TamboProvider
            components={tamboComponents}
            tools={tamboTools}
            apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY || ""}
        >
            <main className="min-h-screen bg-[var(--background)]">
                <IntentInterface />
            </main>
        </TamboProvider>
    );
}
