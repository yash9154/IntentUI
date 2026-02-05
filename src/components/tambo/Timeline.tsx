"use client";

interface TimelineEvent {
    id: string;
    title: string;
    description?: string;
    date?: string;
    status?: "completed" | "current" | "upcoming";
}

interface TimelineProps {
    title?: string;
    events?: TimelineEvent[];
}

const statusColors = {
    completed: "bg-green-500",
    current: "bg-blue-500 animate-pulse",
    upcoming: "bg-gray-500",
};

const statusTextColors = {
    completed: "text-green-400",
    current: "text-blue-400",
    upcoming: "text-gray-400",
};

export default function Timeline({ title, events = [] }: TimelineProps) {
    if (!events || events.length === 0) {
        return (
            <div className="animate-fade-in text-center py-8 text-gray-500">
                No timeline events
            </div>
        );
    }

    return (
        <div className="animate-fade-in">
            {title && (
                <h2 className="text-xl font-bold text-white mb-6">{title}</h2>
            )}

            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-white/10" />

                <div className="space-y-6">
                    {events.map((event, index) => {
                        const status = event.status || "upcoming";
                        return (
                            <div
                                key={event.id || `event-${index}`}
                                className="relative pl-10 animate-slide-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Status dot */}
                                <div
                                    className={`absolute left-1.5 w-4 h-4 rounded-full ${statusColors[status]} border-2 border-[var(--background)]`}
                                />

                                {/* Content */}
                                <div className="rounded-lg border border-white/10 bg-white/5 p-4 hover:border-white/20 transition-colors">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="font-semibold text-white">
                                                {event.title}
                                            </h3>
                                            {event.description && (
                                                <p className="text-sm text-gray-400 mt-1">
                                                    {event.description}
                                                </p>
                                            )}
                                        </div>
                                        {event.date && (
                                            <span className={`text-xs shrink-0 ${statusTextColors[status]}`}>
                                                {event.date}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
