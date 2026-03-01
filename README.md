# Token Counter Chat Application

A modern, lightweight chat application that tracks token usage in real time with persistent state across sessions.  
Built with a focus on clean architecture, reusable UI primitives, and smooth UX.

---

## ✨ Features

- 💬 Real-time token counting while typing
- 📊 Global usage statistics and limits
- 💾 Persistent storage via localStorage
- ⚡ Smooth hydration loading experience
- ♻️ Reusable UI primitives (design-system oriented)
- 🧱 Feature-based scalable architecture

---

## 🚀 Live Demo

🌐 https://yasin25mehdiyev.github.io/token-counter-chat-application

---

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Runtime:** React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **UI System:** shadcn/ui + Radix UI
- **Icons:** Lucide React
- **State:** React Hooks
- **Storage:** localStorage (client persistence)
- **Package Manager:** pnpm

---

## 📦 Core Concepts

### Token Logic

- 1 token = 4 characters (rounded up)
- Max 100 tokens per message
- Global limit: 1000 tokens

### UX Enhancements

- Hydration-aware loaders
- Smooth fade-in transitions
- Layout-stable loading states

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- pnpm

### Quick Start

```bash
pnpm install
pnpm dev       # http://localhost:3000
pnpm build
pnpm start
pnpm lint
```

---

## 📂 Project Structure

The project follows a **feature-first architecture** with shared UI primitives.

```
├── app/
│   ├── chat/
│   │   └── page.tsx            # Chat interface
│   ├── statistics/
│   │   └── page.tsx            # Token usage statistics
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── chat/
│   │   ├── chat-composer.tsx   # Message input
│   │   ├── message-item.tsx    # Single message
│   │   └── message-list.tsx    # Message feed
│   ├── shared/
│   │   └── layout/
│   │       └── header.tsx
│   └── ui/
│       ├── core/               # Shadcn-UI primitives
│       │   ├── button/
│       │   ├── card/
│       │   ├── separator/
│       │   ├── textarea/
│       │   └── tooltip/
│       ├── custom/
│       │   ├── icon-button/
│       │   └── loader/
│       └── statistics/
│           ├── metric-card.tsx
│           ├── statistics-cards.tsx
│           └── usage-bar.tsx
│
├── hooks/
│   ├── use-smooth-loader.ts    # Hydration-aware loading state
│   └── use-token-chat.ts       # Core chat + token logic
│
├── lib/
│   ├── constant.ts             # App-wide constants (limits, config)
│   ├── storage.ts              # localStorage persistence layer
│   ├── token.ts                # Token counting utilities
│   └── utils.ts                # General helpers
│
├── types/
│   └── message.ts              # Shared TypeScript types
│
├── components.json             # Shadcn config
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```
