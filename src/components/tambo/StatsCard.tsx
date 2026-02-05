"use client";

import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface StatsCardProps {
    label: string;
    value: string;
    trend?: "up" | "down" | "neutral";
    color?: "blue" | "green" | "yellow" | "red" | "purple";
}

const colorClasses = {
    blue: "from-blue-500/20 to-blue-600/10 border-blue-500/30",
    green: "from-green-500/20 to-green-600/10 border-green-500/30",
    yellow: "from-yellow-500/20 to-yellow-600/10 border-yellow-500/30",
    red: "from-red-500/20 to-red-600/10 border-red-500/30",
    purple: "from-purple-500/20 to-purple-600/10 border-purple-500/30",
};

const trendColors = {
    up: "text-green-400",
    down: "text-red-400",
    neutral: "text-gray-400",
};

export default function StatsCard({ label = "", value = "", trend, color = "blue" }: StatsCardProps) {
    const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;

    return (
        <div
            className={`
        relative overflow-hidden rounded-xl p-5
        bg-gradient-to-br ${colorClasses[color]}
        border backdrop-blur-sm
        animate-fade-in hover:scale-[1.02] transition-transform duration-200
      `}
        >
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm text-gray-400 mb-1">{label}</p>
                    <p className="text-3xl font-bold text-white">{value}</p>
                </div>
                {trend && (
                    <div className={`${trendColors[trend]} p-2 rounded-lg bg-white/5`}>
                        <TrendIcon className="w-5 h-5" />
                    </div>
                )}
            </div>

            {/* Decorative gradient orb */}
            <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20"
                style={{
                    background: `radial-gradient(circle, ${color === 'blue' ? '#3b82f6' : color === 'green' ? '#22c55e' : color === 'yellow' ? '#eab308' : color === 'red' ? '#ef4444' : '#a855f7'} 0%, transparent 70%)`,
                }}
            />
        </div>
    );
}
