"use client";

interface ProgressBarProps {
    label?: string;
    value?: number;
    max?: number;
    color?: "blue" | "green" | "yellow" | "red" | "purple";
    showPercentage?: boolean;
}

const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    yellow: "from-yellow-500 to-yellow-600",
    red: "from-red-500 to-red-600",
    purple: "from-purple-500 to-purple-600",
};

const bgColorClasses = {
    blue: "bg-blue-500/20",
    green: "bg-green-500/20",
    yellow: "bg-yellow-500/20",
    red: "bg-red-500/20",
    purple: "bg-purple-500/20",
};

export default function ProgressBar({
    label = "Progress",
    value = 0,
    max = 100,
    color = "blue",
    showPercentage = true,
}: ProgressBarProps) {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
        <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-300">{label}</span>
                {showPercentage && (
                    <span className="text-sm font-bold text-white">
                        {Math.round(percentage)}%
                    </span>
                )}
            </div>

            <div className={`h-3 rounded-full ${bgColorClasses[color]} overflow-hidden`}>
                <div
                    className={`h-full rounded-full bg-gradient-to-r ${colorClasses[color]} transition-all duration-500 ease-out`}
                    style={{ width: `${percentage}%` }}
                />
            </div>

            {value !== undefined && max !== undefined && (
                <div className="mt-1 text-xs text-gray-500">
                    {value} / {max}
                </div>
            )}
        </div>
    );
}
