"use client";

interface TaskBoardItem {
    id: string;
    title: string;
    subtitle?: string;
    tag?: string;
}

interface TaskBoardColumn {
    id: string;
    title: string;
    items?: TaskBoardItem[];
}

interface TaskBoardProps {
    title?: string;
    columns?: TaskBoardColumn[];
}

const columnColors = [
    "border-blue-500/30",
    "border-purple-500/30",
    "border-green-500/30",
    "border-yellow-500/30",
    "border-red-500/30",
];

export default function TaskBoard({ title, columns = [] }: TaskBoardProps) {
    if (!columns || columns.length === 0) {
        return (
            <div className="animate-fade-in text-center py-8 text-gray-500">
                No board data available
            </div>
        );
    }

    return (
        <div className="animate-fade-in">
            {title && (
                <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
            )}

            <div className="flex gap-4 overflow-x-auto pb-4">
                {columns.map((column, colIndex) => {
                    const items = column.items || [];
                    return (
                        <div
                            key={column.id || colIndex}
                            className={`
              min-w-[260px] max-w-[280px] flex-shrink-0
              rounded-xl border ${columnColors[colIndex % columnColors.length]}
              bg-gradient-to-b from-white/5 to-transparent
              backdrop-blur-sm
            `}
                        >
                            {/* Column Header */}
                            <div className="p-3 border-b border-white/10">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold text-white">{column.title || 'Untitled'}</h3>
                                    <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                                        {items.length}
                                    </span>
                                </div>
                            </div>

                            {/* Column Items */}
                            <div className="p-2 space-y-2 max-h-[400px] overflow-y-auto">
                                {items.length === 0 ? (
                                    <div className="text-center py-8 text-gray-500 text-sm">
                                        No items yet
                                    </div>
                                ) : (
                                    items.map((item, itemIndex) => (
                                        <div
                                            key={item.id || itemIndex}
                                            className="
                      p-3 rounded-lg bg-[var(--secondary)] border border-white/5
                      hover:border-white/20 transition-all duration-200
                      cursor-pointer hover:translate-y-[-2px]
                      animate-slide-up
                    "
                                            style={{ animationDelay: `${itemIndex * 50}ms` }}
                                        >
                                            <h4 className="font-medium text-white text-sm">{item.title}</h4>
                                            {item.subtitle && (
                                                <p className="text-xs text-gray-400 mt-1">{item.subtitle}</p>
                                            )}
                                            {item.tag && (
                                                <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300">
                                                    {item.tag}
                                                </span>
                                            )}
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
