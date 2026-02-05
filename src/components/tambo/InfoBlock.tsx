"use client";

import { Info, Lightbulb, AlertTriangle, CheckCircle } from "lucide-react";

interface InfoBlockProps {
    title: string;
    content: string;
    type: "info" | "tip" | "warning" | "success";
}

const typeConfig = {
    info: {
        icon: Info,
        bgClass: "from-blue-500/10 to-blue-600/5 border-blue-500/30",
        iconClass: "text-blue-400 bg-blue-500/20",
    },
    tip: {
        icon: Lightbulb,
        bgClass: "from-yellow-500/10 to-yellow-600/5 border-yellow-500/30",
        iconClass: "text-yellow-400 bg-yellow-500/20",
    },
    warning: {
        icon: AlertTriangle,
        bgClass: "from-orange-500/10 to-orange-600/5 border-orange-500/30",
        iconClass: "text-orange-400 bg-orange-500/20",
    },
    success: {
        icon: CheckCircle,
        bgClass: "from-green-500/10 to-green-600/5 border-green-500/30",
        iconClass: "text-green-400 bg-green-500/20",
    },
};

export default function InfoBlock({ title = "", content = "", type = "info" }: InfoBlockProps) {
    const config = typeConfig[type] || typeConfig.info;
    const Icon = config.icon;

    return (
        <div
            className={`
        rounded-xl p-4 border backdrop-blur-sm
        bg-gradient-to-br ${config.bgClass}
        animate-fade-in
      `}
        >
            <div className="flex gap-3">
                <div className={`p-2 rounded-lg ${config.iconClass} shrink-0`}>
                    <Icon className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="font-semibold text-white mb-1">{title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{content}</p>
                </div>
            </div>
        </div>
    );
}
