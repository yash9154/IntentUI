"use client";

import { useEffect, useState } from "react";
import { CheckCircle, XCircle, Info, X } from "lucide-react";

interface ToastProps {
    message?: string;
    type?: "success" | "error" | "info";
    duration?: number;
}

const typeConfig = {
    success: {
        icon: CheckCircle,
        bgClass: "from-green-500/20 to-green-600/10 border-green-500/50",
        iconClass: "text-green-400",
    },
    error: {
        icon: XCircle,
        bgClass: "from-red-500/20 to-red-600/10 border-red-500/50",
        iconClass: "text-red-400",
    },
    info: {
        icon: Info,
        bgClass: "from-blue-500/20 to-blue-600/10 border-blue-500/50",
        iconClass: "text-blue-400",
    },
};

export default function Toast({
    message = "Notification",
    type = "info",
    duration = 5000,
}: ToastProps) {
    const [isVisible, setIsVisible] = useState(true);
    const config = typeConfig[type] || typeConfig.info;
    const Icon = config.icon;

    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [duration]);

    if (!isVisible) return null;

    return (
        <div
            className={`
                fixed bottom-4 right-4 z-50
                flex items-center gap-3 px-4 py-3
                rounded-xl border backdrop-blur-md
                bg-gradient-to-r ${config.bgClass}
                animate-slide-up shadow-lg
                max-w-sm
            `}
        >
            <Icon className={`w-5 h-5 ${config.iconClass} shrink-0`} />
            <p className="text-sm text-white flex-1">{message}</p>
            <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
}
