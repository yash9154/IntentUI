# 🎯 IntentUI

> **Your interface, from your intent.** An AI-powered generative UI that adapts in real-time to what you're trying to accomplish.

Built with [Tambo](https://tambo.co) for the Tambo Hackathon.

---

## ✨ What is IntentUI?

IntentUI flips traditional UI design on its head. Instead of clicking through menus and forms, you simply **describe what you want to do** and the interface generates itself.

```
"I want to track my job applications"
    ↓
💼 Dashboard with stats, kanban board, and action buttons appear instantly
```

**The UI IS the output of the AI** — not just text responses, but fully functional React components.

---

## 🧠 How It Uses Tambo

IntentUI leverages Tambo's core capabilities:

### 1. Generative Components
The AI chooses which components to render based on user intent. We registered **8 custom components** that Tambo can dynamically compose:

| Component | When AI Uses It |
|-----------|-----------------|
| **StatsCard** | Showing metrics (apps sent, savings, streaks) |
| **InfoBlock** | Tips, warnings, explanations |
| **TaskBoard** | Kanban-style tracking (jobs, habits, tasks) |
| **ActionPanel** | Next steps and quick actions |
| **QuickForm** | Data entry and forms |
| **ProgressBar** | Goal tracking and completion % |
| **Toast** | Success/error notifications |
| **Timeline** | Milestones and chronological events |

### 2. Interactable Components
Components aren't static — **clicking buttons triggers new AI reasoning cycles**:
- Click "Add Application" → Form appears
- Click "View Statistics" → Charts generate
- Submit a form → Board updates

### 3. Local Tools
Custom tools extend AI capabilities:
- **refine-intent** — Adjusts the UI based on new context
- **add-board-item** — Adds items to kanban boards
- **show-notification** — Triggers toast messages

---

## 🎮 Demo Use Cases

Try these preset intents to see the full power:

| Preset | What It Generates |
|--------|-------------------|
| 💼 **Job Tracker** | Stats + Kanban board + Add forms |
| 💰 **Budget Tracker** | Income/expense stats + Progress bars |
| ✨ **Habit Tracker** | Habit board + Streak stats |
| 📅 **Project Timeline** | Timeline component + Phase progress |

---

## 🛠️ Tech Stack

- **Next.js 15** + **React 19** — Latest React features
- **Tambo React SDK** — Generative UI engine
- **TypeScript** — Full type safety
- **Tailwind CSS** — Consistent styling
- **Zod** — Schema validation for component props

---

## 📦 Run Locally

```bash
# Install dependencies
npm install

# Add your Tambo API key
cp .env.local.example .env.local
# Edit .env.local with your key from tambo.co

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🔑 Configuration

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_TAMBO_API_KEY` | Yes | Get from [tambo.co](https://tambo.co) |

**Tambo Settings:**
- AI Mode: **LLM**
- Token Required: **OFF**

---

## 🏆 Why IntentUI Stands Out

| Traditional UI | IntentUI |
|----------------|----------|
| User learns the interface | Interface learns the user |
| Fixed navigation | Dynamic generation |
| Click through menus | Describe your goal |
| Static components | Evolving, context-aware UI |

**Key Innovation:** The entire application UI is generated from natural language intent, showcasing what's possible when AI doesn't just return text — it returns functional interfaces.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── IntentInterface.tsx    # Main interface
│   └── tambo/                 # 8 generative components
│       ├── StatsCard.tsx
│       ├── TaskBoard.tsx
│       ├── ProgressBar.tsx
│       ├── Timeline.tsx
│       └── ...
└── lib/
    └── tambo.ts               # Component & tool registration
```

---

## 🎥 Demo

- **Live Demo**: https://intent-ui-xi.vercel.app/
- **Video Demo**: *(add link)*

---

## 📝 License

MIT
