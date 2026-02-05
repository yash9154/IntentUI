"use client";

import { useState } from "react";
import { useTamboThread, useTamboThreadInput } from "@tambo-ai/react";
import { Sparkles, Send, Loader2, Zap } from "lucide-react";

// Preset intents for reliable demo
const PRESET_INTENTS = [
    {
        label: "Job Tracker",
        intent: "I want to track my job applications. Show me a dashboard with stats for applications sent, interviews scheduled, and offers received. Include a kanban board with columns for Applied, Interview, Offer, and Rejected stages. Add some sample applications and action buttons to add new applications.",
        icon: "💼",
    },
    {
        label: "Budget Tracker",
        intent: "I want to track my monthly budget. Show me stats for income ($5,000), expenses ($3,200), and savings ($1,800). Include a progress bar showing my savings goal is 60% complete toward $3,000. Add an info tip about saving strategies and action buttons to add income or expenses.",
        icon: "💰",
    },
    {
        label: "Habit Tracker",
        intent: "I want to track my daily habits. Show me a kanban board with columns for 'Daily Habits', 'In Progress', and 'Completed Today'. Add habits like 'Drink 8 glasses of water', 'Exercise 30 mins', 'Read for 20 mins', 'Meditate'. Include stats showing my current streak and progress bars for weekly goals.",
        icon: "✨",
    },
    {
        label: "Project Timeline",
        intent: "Show me a project timeline for launching a new product. Include a timeline component with milestones: 'Research' (completed), 'Design' (completed), 'Development' (current), 'Testing' (upcoming), and 'Launch' (upcoming). Add stats for days remaining and progress bars for each phase.",
        icon: "📅",
    },
    {
        label: "Quick Add",
        intent: "I want to add a new job application to my tracker. Show me a form to enter company name, job title, and application date.",
        icon: "➕",
    },
    {
        label: "Focus: Interviews",
        intent: "Focus on my upcoming interviews. Show me tips for interview preparation and highlight companies where I have interviews scheduled.",
        icon: "🎯",
    },
];

export default function IntentInterface() {
    const { thread } = useTamboThread();
    const { value, setValue, submit, isPending } = useTamboThreadInput();
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!value.trim() || isPending) return;
        setHasSubmitted(true);
        await submit();
        setValue("");
    };

    const handlePresetClick = async (intent: string) => {
        setHasSubmitted(true);
        setValue(intent);
        await submit();
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="border-b border-white/10 backdrop-blur-sm bg-[var(--background)]/80 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                            <Zap className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">IntentUI</h1>
                            <p className="text-xs text-gray-400">Your interface, from your intent</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Sparkles className="w-4 h-4 text-indigo-400" />
                        <span>Powered by Tambo</span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col">
                {!hasSubmitted ? (
                    /* Landing State - Show input prominently */
                    <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
                        <div className="text-center mb-8">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                <span className="gradient-text">Describe your intent</span>
                            </h2>
                            <p className="text-lg text-gray-400 max-w-lg mx-auto">
                                The interface adapts to you. Tell us what you want to accomplish,
                                and watch the UI generate in real-time.
                            </p>
                        </div>

                        {/* Intent Input */}
                        <form onSubmit={handleSubmit} className="w-full max-w-2xl mb-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    placeholder="e.g., I want to track my job applications..."
                                    className="
                    w-full px-6 py-4 pr-14 rounded-2xl
                    bg-[var(--secondary)] border-2 border-white/10
                    text-white text-lg placeholder-gray-500
                    focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/20
                    transition-all duration-300
                  "
                                    disabled={isPending}
                                />
                                <button
                                    type="submit"
                                    disabled={!value.trim() || isPending}
                                    className="
                    absolute right-3 top-1/2 -translate-y-1/2
                    w-10 h-10 rounded-xl
                    bg-gradient-to-r from-indigo-500 to-purple-500
                    flex items-center justify-center
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-all duration-200 active:scale-95
                  "
                                >
                                    {isPending ? (
                                        <Loader2 className="w-5 h-5 text-white animate-spin" />
                                    ) : (
                                        <Send className="w-5 h-5 text-white" />
                                    )}
                                </button>
                            </div>
                        </form>

                        {/* Preset Intents */}
                        <div className="flex flex-col items-center gap-3">
                            <p className="text-sm text-gray-500">Or try a preset:</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {PRESET_INTENTS.map((preset) => (
                                    <button
                                        key={preset.label}
                                        onClick={() => handlePresetClick(preset.intent)}
                                        disabled={isPending}
                                        className="
                      flex items-center gap-2 px-4 py-2.5 rounded-xl
                      bg-white/5 border border-white/10
                      hover:bg-white/10 hover:border-white/20
                      text-sm text-gray-300 hover:text-white
                      transition-all duration-200
                      disabled:opacity-50 disabled:cursor-not-allowed
                    "
                                    >
                                        <span>{preset.icon}</span>
                                        <span>{preset.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Active State - Show generated UI */
                    <div className="flex-1 flex flex-col max-w-6xl mx-auto w-full px-4 py-6">
                        {/* Messages / Generated Components */}
                        <div className="flex-1 space-y-6 overflow-y-auto pb-32">
                            {thread?.messages.map((message, index) => (
                                <div
                                    key={message.id || index}
                                    className="animate-fade-in"
                                >
                                    {/* User Message */}
                                    {message.role === "user" && (
                                        <div className="flex justify-end mb-4">
                                            <div className="max-w-xl px-4 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                                                {Array.isArray(message.content)
                                                    ? message.content.map((part, i) =>
                                                        part.type === "text" ? <span key={i}>{part.text}</span> : null
                                                    )
                                                    : String(message.content)}
                                            </div>
                                        </div>
                                    )}

                                    {/* Assistant Message */}
                                    {message.role === "assistant" && (
                                        <div className="space-y-4">
                                            {/* Text content */}
                                            {Array.isArray(message.content) && message.content.some(p => p.type === "text" && p.text) && (
                                                <div className="text-gray-300 leading-relaxed">
                                                    {message.content.map((part, i) =>
                                                        part.type === "text" ? <p key={i}>{part.text}</p> : null
                                                    )}
                                                </div>
                                            )}

                                            {/* Rendered Component */}
                                            {message.renderedComponent && (
                                                <div className="mt-4">
                                                    {message.renderedComponent}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Loading State */}
                            {isPending && (
                                <div className="flex items-center gap-3 text-gray-400">
                                    <Loader2 className="w-5 h-5 animate-spin text-indigo-400" />
                                    <span>Generating your interface...</span>
                                </div>
                            )}
                        </div>

                        {/* Fixed Input at Bottom */}
                        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[var(--background)] via-[var(--background)] to-transparent">
                            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        placeholder="Refine your intent or ask for changes..."
                                        className="
                      w-full px-5 py-3.5 pr-12 rounded-xl
                      bg-[var(--secondary)] border border-white/10
                      text-white placeholder-gray-500
                      focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20
                      transition-all duration-200
                    "
                                        disabled={isPending}
                                    />
                                    <button
                                        type="submit"
                                        disabled={!value.trim() || isPending}
                                        className="
                      absolute right-2 top-1/2 -translate-y-1/2
                      w-9 h-9 rounded-lg
                      bg-indigo-500 hover:bg-indigo-600
                      flex items-center justify-center
                      disabled:opacity-50 disabled:cursor-not-allowed
                      transition-all duration-200
                    "
                                    >
                                        {isPending ? (
                                            <Loader2 className="w-4 h-4 text-white animate-spin" />
                                        ) : (
                                            <Send className="w-4 h-4 text-white" />
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
