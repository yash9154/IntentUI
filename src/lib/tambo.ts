import { TamboComponent, TamboTool } from "@tambo-ai/react";
import { z } from "zod";

// Import components
import StatsCard from "@/components/tambo/StatsCard";
import InfoBlock from "@/components/tambo/InfoBlock";
import TaskBoard from "@/components/tambo/TaskBoard";
import ActionPanel from "@/components/tambo/ActionPanel";
import QuickForm from "@/components/tambo/QuickForm";
import ProgressBar from "@/components/tambo/ProgressBar";
import Toast from "@/components/tambo/Toast";
import Timeline from "@/components/tambo/Timeline";

// ============================================
// TAMBO COMPONENTS REGISTRATION
// ============================================

export const tamboComponents: TamboComponent[] = [
    {
        name: "StatsCard",
        description: "Displays a single statistic or metric with a label, value, and optional trend indicator. Use this to show quantitative summaries like 'Applications Sent: 12' or 'Interviews Scheduled: 3'.",
        component: StatsCard,
        propsSchema: z.object({
            label: z.string().describe("The label describing what metric this is, e.g. 'Applications Sent'"),
            value: z.string().describe("The value to display, e.g. '12' or '$5,000'"),
            trend: z.enum(["up", "down", "neutral"]).optional().describe("Optional trend indicator showing if the metric is going up, down, or staying neutral"),
            color: z.enum(["blue", "green", "yellow", "red", "purple"]).optional().describe("Optional color theme for the card"),
        }),
    },
    {
        name: "InfoBlock",
        description: "Displays contextual information, tips, warnings, or success messages. Use this to provide guidance, explain something, or show status messages to the user.",
        component: InfoBlock,
        propsSchema: z.object({
            title: z.string().describe("The title or heading of the info block"),
            content: z.string().describe("The main content or message to display"),
            type: z.enum(["info", "tip", "warning", "success"]).describe("The type of info block which affects its styling - info for neutral information, tip for helpful suggestions, warning for cautions, success for positive confirmations"),
        }),
    },
    {
        name: "TaskBoard",
        description: "A kanban-style board for tracking items across different stages or columns. Perfect for job applications, project tasks, or any workflow with multiple stages. Use this when the user wants to track or organize items that move through stages.",
        component: TaskBoard,
        propsSchema: z.object({
            title: z.string().optional().describe("Optional title for the board"),
            columns: z.array(z.object({
                id: z.string().describe("Unique identifier for the column"),
                title: z.string().describe("Display title for the column, e.g. 'Applied', 'Interview', 'Offer'"),
                items: z.array(z.object({
                    id: z.string().describe("Unique identifier for the item"),
                    title: z.string().describe("Main title of the item, e.g. company name"),
                    subtitle: z.string().optional().describe("Secondary info like job title or date"),
                    tag: z.string().optional().describe("Optional tag or label"),
                })).describe("The items in this column"),
            })).describe("The columns of the board, each containing items"),
        }),
    },
    {
        name: "ActionPanel",
        description: "Displays a set of action buttons that the user can click to perform actions or navigate. Use this to offer next steps, quick actions, or contextual operations based on the current intent.",
        component: ActionPanel,
        propsSchema: z.object({
            title: z.string().optional().describe("Optional title for the action panel"),
            actions: z.array(z.object({
                id: z.string().describe("Unique identifier for the action"),
                label: z.string().describe("Button label text"),
                icon: z.enum(["plus", "chart", "refresh", "edit", "trash", "send", "check"]).optional().describe("Optional icon to show on the button"),
                variant: z.enum(["primary", "secondary", "ghost"]).describe("Button style variant"),
            })).describe("The list of action buttons to display"),
        }),
    },
    {
        name: "QuickForm",
        description: "A dynamic form for collecting structured input from the user. Use this when the user needs to add new items, enter data, or provide information. The form fields are configurable.",
        component: QuickForm,
        propsSchema: z.object({
            title: z.string().describe("The form title"),
            description: z.string().optional().describe("Optional description explaining the form's purpose"),
            fields: z.array(z.object({
                name: z.string().describe("Field identifier/name"),
                label: z.string().describe("Display label for the field"),
                type: z.enum(["text", "select", "date", "textarea"]).describe("The type of input field"),
                placeholder: z.string().optional().describe("Placeholder text for the input"),
                options: z.array(z.string()).optional().describe("Options for select fields"),
                required: z.boolean().optional().describe("Whether the field is required"),
            })).describe("The form fields to display"),
            submitLabel: z.string().describe("Text for the submit button"),
        }),
    },
    {
        name: "ProgressBar",
        description: "A visual progress bar showing completion or goal progress. Perfect for savings goals, project completion, habit streaks, or any percentage-based metric. Use this when showing how close something is to completion.",
        component: ProgressBar,
        propsSchema: z.object({
            label: z.string().describe("The label describing what progress is being tracked, e.g. 'Savings Goal'"),
            value: z.number().describe("The current value or amount achieved"),
            max: z.number().optional().describe("The target or maximum value (default 100)"),
            color: z.enum(["blue", "green", "yellow", "red", "purple"]).optional().describe("Optional color theme for the progress bar"),
            showPercentage: z.boolean().optional().describe("Whether to show the percentage number"),
        }),
    },
    {
        name: "Toast",
        description: "A notification toast message that appears temporarily. Use this to confirm actions, show success messages, or display errors and warnings to the user.",
        component: Toast,
        propsSchema: z.object({
            message: z.string().describe("The notification message to display"),
            type: z.enum(["success", "error", "info"]).describe("The type of notification - success for confirmations, error for problems, info for neutral updates"),
            duration: z.number().optional().describe("How long the toast stays visible in milliseconds (default 5000)"),
        }),
    },
    {
        name: "Timeline",
        description: "A vertical timeline showing events or milestones in chronological order. Perfect for project milestones, career history, onboarding steps, or any sequential process. Use this when showing a sequence of events or steps.",
        component: Timeline,
        propsSchema: z.object({
            title: z.string().optional().describe("Optional title for the timeline"),
            events: z.array(z.object({
                id: z.string().describe("Unique identifier for the event"),
                title: z.string().describe("The title of the event or milestone"),
                description: z.string().optional().describe("Optional description or details"),
                date: z.string().optional().describe("The date or time of the event"),
                status: z.enum(["completed", "current", "upcoming"]).optional().describe("The status of this event - completed, current, or upcoming"),
            })).describe("The list of timeline events"),
        }),
    },
];

// ============================================
// TAMBO LOCAL TOOLS
// ============================================

export const tamboTools: TamboTool[] = [
    {
        name: "refine-intent",
        description: "Refine or modify the current interface based on additional context or a new focus. Use this when the user wants to adjust, narrow down, or change what they're seeing.",
        tool: async (input: { refinement: string }) => {
            // This tool helps the LLM understand it should regenerate UI with new context
            return {
                success: true,
                message: `Interface refined with context: ${input.refinement}`,
                shouldRegenerate: true,
            };
        },
        inputSchema: z.object({
            refinement: z.string().describe("The refinement or additional context to apply to the interface"),
        }),
        outputSchema: z.object({
            success: z.boolean(),
            message: z.string(),
            shouldRegenerate: z.boolean(),
        }),
    },
    {
        name: "add-board-item",
        description: "Add a new item to a task board column. Use this when the user wants to add a new application, task, or item to track.",
        tool: async (input: { columnId: string; title: string; subtitle?: string; tag?: string }) => {
            // Generate a unique ID for the new item
            const newId = `item-${Date.now()}`;
            return {
                success: true,
                newItem: {
                    id: newId,
                    title: input.title,
                    subtitle: input.subtitle,
                    tag: input.tag,
                },
                targetColumn: input.columnId,
                message: `Added "${input.title}" to the board`,
            };
        },
        inputSchema: z.object({
            columnId: z.string().describe("The ID of the column to add the item to"),
            title: z.string().describe("The title of the new item"),
            subtitle: z.string().optional().describe("Optional subtitle or secondary info"),
            tag: z.string().optional().describe("Optional tag for the item"),
        }),
        outputSchema: z.object({
            success: z.boolean(),
            newItem: z.object({
                id: z.string(),
                title: z.string(),
                subtitle: z.string().optional(),
                tag: z.string().optional(),
            }),
            targetColumn: z.string(),
            message: z.string(),
        }),
    },
    {
        name: "show-notification",
        description: "Show a toast notification to the user. Use this to confirm actions were successful or alert the user to something.",
        tool: async (input: { message: string; type: "success" | "error" | "info" }) => {
            return {
                success: true,
                notification: {
                    message: input.message,
                    type: input.type,
                },
            };
        },
        inputSchema: z.object({
            message: z.string().describe("The notification message to show"),
            type: z.enum(["success", "error", "info"]).describe("The type of notification"),
        }),
        outputSchema: z.object({
            success: z.boolean(),
            notification: z.object({
                message: z.string(),
                type: z.enum(["success", "error", "info"]),
            }),
        }),
    },
];
