"use client";

import { useState } from "react";
import { useTamboThreadInput } from "@tambo-ai/react";
import { Send } from "lucide-react";

interface FormField {
    name: string;
    label: string;
    type: "text" | "select" | "date" | "textarea";
    placeholder?: string;
    options?: string[];
    required?: boolean;
}

interface QuickFormProps {
    title: string;
    description?: string;
    fields: FormField[];
    submitLabel: string;
}

export default function QuickForm({ title = "Form", description, fields = [], submitLabel = "Submit" }: QuickFormProps) {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { setValue: setTamboValue, submit } = useTamboThreadInput();

    const handleChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Format the form data as a message to Tambo
        const formSummary = Object.entries(formData)
            .map(([key, value]) => `${key}: ${value}`)
            .join(", ");

        setTamboValue(`Form submitted with data: ${formSummary}. Please add this to the board and update the interface.`);
        await submit();

        setFormData({});
        setIsSubmitting(false);
    };

    if (!fields || fields.length === 0) {
        return null;
    }

    return (
        <div className="animate-fade-in rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm p-5">
            <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
            {description && (
                <p className="text-sm text-gray-400 mb-4">{description}</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                {fields.map((field, index) => (
                    <div key={field.name || `field-${index}`}>
                        <label
                            htmlFor={field.name}
                            className="block text-sm font-medium text-gray-300 mb-1.5"
                        >
                            {field.label}
                            {field.required && <span className="text-red-400 ml-1">*</span>}
                        </label>

                        {field.type === "textarea" ? (
                            <textarea
                                id={field.name}
                                placeholder={field.placeholder}
                                required={field.required}
                                value={formData[field.name] || ""}
                                onChange={(e) => handleChange(field.name, e.target.value)}
                                className="
                  w-full px-4 py-2.5 rounded-lg
                  bg-[var(--secondary)] border border-white/10
                  text-white placeholder-gray-500
                  focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50
                  transition-all duration-200 resize-none
                "
                                rows={3}
                            />
                        ) : field.type === "select" ? (
                            <select
                                id={field.name}
                                required={field.required}
                                value={formData[field.name] || ""}
                                onChange={(e) => handleChange(field.name, e.target.value)}
                                className="
                  w-full px-4 py-2.5 rounded-lg
                  bg-[var(--secondary)] border border-white/10
                  text-white
                  focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50
                  transition-all duration-200
                "
                            >
                                <option value="">Select {field.label.toLowerCase()}</option>
                                {field.options?.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                        ) : (
                            <input
                                id={field.name}
                                type={field.type}
                                placeholder={field.placeholder}
                                required={field.required}
                                value={formData[field.name] || ""}
                                onChange={(e) => handleChange(field.name, e.target.value)}
                                className="
                  w-full px-4 py-2.5 rounded-lg
                  bg-[var(--secondary)] border border-white/10
                  text-white placeholder-gray-500
                  focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50
                  transition-all duration-200
                "
                            />
                        )}
                    </div>
                ))}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
            w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg
            bg-gradient-to-r from-indigo-500 to-purple-500 
            hover:from-indigo-600 hover:to-purple-600
            text-white font-semibold
            shadow-lg shadow-indigo-500/25
            transition-all duration-200
            disabled:opacity-50 disabled:cursor-not-allowed
            active:scale-[0.98]
          "
                >
                    {isSubmitting ? (
                        <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Submitting...
                        </>
                    ) : (
                        <>
                            <Send className="w-4 h-4" />
                            {submitLabel}
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
