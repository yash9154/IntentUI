# IntentUI 🚀

> **Your Interface, Generated from Intent**

IntentUI is an intent-driven generative interface built with [Tambo](https://tambo.co). Instead of navigating static dashboards, you describe what you want to do, and the UI generates dynamically.

![Tambo Hackathon](https://img.shields.io/badge/Hackathon-Tambo%20UI%20Strikes%20Back-6366f1)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)

## 🎯 The Concept

Traditional dashboards are static and one-size-fits-all. IntentUI flips this:

- **Before**: Navigate to the interface
- **After**: The interface comes to YOU

```
"I want to track my job applications" 
    → Stats cards + Kanban board + Action buttons appear
```

## ✨ Features

- **Intent-Driven UI**: Describe what you want, get a custom interface
- **Generative Components**: StatsCard, InfoBlock, TaskBoard, ActionPanel, QuickForm
- **Interactable Actions**: Buttons trigger new Tambo reasoning cycles
- **Preset Demos**: Quick-start buttons for reliable demonstrations
- **Beautiful Dark Theme**: Glass morphism, gradients, and smooth animations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 + React 19
- **AI/UI**: Tambo React SDK
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Get Your Tambo API Key

1. Go to [tambo.co](https://tambo.co)
2. Create an account and generate an API key
3. Run the init command:

```bash
npx tambo init
```

Or manually create `.env.local`:

```env
NEXT_PUBLIC_TAMBO_API_KEY=your_key_here
```

### 3. Run the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start describing your intent!

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles + dark theme
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page with TamboProvider
├── components/
│   ├── IntentInterface.tsx  # Main UI component
│   └── tambo/               # Tambo-registered components
│       ├── StatsCard.tsx
│       ├── InfoBlock.tsx
│       ├── TaskBoard.tsx
│       ├── ActionPanel.tsx
│       └── QuickForm.tsx
└── lib/
    └── tambo.ts         # Component & tool registration
```

## 🎮 Demo Intents

Try these preset intents:

| Preset | What It Generates |
|--------|-------------------|
| **Job Tracker** | Stats + Kanban board + Actions |
| **Quick Add** | Form to add new applications |
| **Focus: Interviews** | Tips + Interview-focused view |

## 🏆 Built for Tambo Hackathon

This project demonstrates:

- ✅ **Generative Components** - UI rendered based on LLM decisions
- ✅ **Interactable Components** - Buttons trigger new AI cycles
- ✅ **Local Tools** - `refine-intent`, `add-board-item`
- ✅ **Real-World Use Case** - Job application tracking

## 📄 License

MIT © 2024
