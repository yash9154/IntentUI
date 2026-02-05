"use client";

import { useTamboThreadInput } from "@tambo-ai/react";
import { Plus, BarChart3, RefreshCw, Edit, Trash2, Send, Check } from "lucide-react";

interface Action {
    id: string;
    label: string;
    icon?: "plus" | "chart" | "refresh" | "edit" | "trash" | "send" | "check";
    variant: "primary" | "secondary" | "ghost";
}

interface ActionPanelProps {
    title?: string;
    actions: Action[];
}

const iconComponents = {
    plus: Plus,
    chart: BarChart3,
    refresh: RefreshCw,
    edit: Edit,
    trash: Trash2,
    send: Send,
    check: Check,
};

const variantClasses = {
    primary: "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg shadow-indigo-500/25",
    secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/20",
    ghost: "bg-transparent hover:bg-white/10 text-gray-300 hover:text-white",
};

export default function ActionPanel({ title, actions = [] }: ActionPanelProps) {
    const { setValue, submit } = useTamboThreadInput();

    const handleActionClick = async (action: Action) => {
        // When an action is clicked, we send it as a message to Tambo
        // This triggers a new reasoning cycle
        setValue(`User clicked action: "${action.label}". Please respond appropriately and update the interface if needed.`);
        await submit();
    };

    if (!actions || actions.length === 0) {
        return null;
    }

    return (
        <div className="animate-fade-in">
            {title && (
                <h3 className="text-sm font-medium text-gray-400 mb-3">{title}</h3>
            )}

            <div className="flex flex-wrap gap-2">
                {actions.map((action, index) => {
                    const Icon = action.icon ? iconComponents[action.icon] : null;

                    return (
                        <button
                            key={action.id || `action-${index}`}
                            onClick={() => handleActionClick(action)}
                            className={`
                flex items-center gap-2 px-4 py-2.5 rounded-lg
                font-medium text-sm transition-all duration-200
                active:scale-95 ${variantClasses[action.variant]}
              `}
                        >
                            {Icon && <Icon className="w-4 h-4" />}
                            {action.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
