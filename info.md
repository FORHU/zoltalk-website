
# Project Overview: zoltalk-website

## About This Project
This is a **Next.js 15 production-ready web application template** following a **feature-oriented architecture (FAOS)** with strong boundaries between layers. The project is set up with modern tooling, testing, and development workflows.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **UI & Styling**: Tailwind CSS, clsx, tailwind-merge
- **State Management**: Zustand (UI state), TanStack Query (server state)
- **Data Fetching**: TanStack Query v5 with useSafeQuery/useSafeMutation wrappers
- **Validation**: Zod
- **Testing**: Vitest, React Testing Library, Playwright (E2E)
- **Component Dev**: Storybook 8
- **Animations**: Framer Motion
- **Data Visualization**: Recharts
- **Icons**: Lucide React
- **Package Manager**: pnpm v9
- **Git Hygiene**: Husky, lint-staged, Commitlint
- **CI/CD**: GitHub Actions

## Project Structure
```text
zoltalk-website/
├── .github/                # GitHub Actions workflows
├── .husky/                  # Git hooks
├── .storybook/             # Storybook configuration
├── .vscode/                # VSCode settings
├── docs/                   # Documentation (Framework Structure guides)
├── e2e/                    # Playwright E2E tests
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js App Router (thin composer layer)
│   ├── features/           # Feature modules (isolated business domains)
│   │   ├── auth/          # Authentication feature
│   │   ├── dashboard/     # Dashboard feature
│   │   ├── posts/         # Posts feature (full CRUD)
│   │   └── users/         # Users feature
│   └── shared/            # Shared infrastructure (no business logic)
├── tools/                  # Build/validation scripts
├── .env.example           # Example env vars
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── ...other config files
```

## Key Architecture Principles
1. **Feature Isolation**: Features cannot import from other features, only from `shared/`
2. **Shared Kernel Purity**: `shared/` never imports from `features/` or `app/`
3. **App Layer Dumbness**: `app/` only composes features, no direct React Query usage
4. **Absolute Imports Only**: Use `@/app`, `@/features`, `@/shared`

## Available Scripts
| Command                  | Description                                                                 |
| ------------------------ | --------------------------------------------------------------------------- |
| `pnpm dev`               | Start dev server                                                          |
| `pnpm build`             | Build for production                                                        |
| `pnpm start`             | Start production server                                                   |
| `pnpm lint`              | Lint code                                                                  |
| `pnpm type-check`        | Type check                                                                 |
| `pnpm validate`          | Validate FAOS architecture                                                    |
| `pnpm test`              | Run Vitest tests                                                          |
| `pnpm test:e2e`          | Run Playwright E2E tests                                                  |
| `pnpm storybook`         | Start Storybook                                                              |

## Documentation
For more detailed docs, see:
- [Engineering Handbook](./docs/Framework-Structure/engineering-handbook.md)
- [Beginner Guide](./docs/Framework-Structure/beginner-guide.md)
- [API Error Guide](./docs/Framework-Structure/api-error-guide.md)
