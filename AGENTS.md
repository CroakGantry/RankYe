# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

RankYe is a client-side React SPA (Vite + TypeScript + Tailwind CSS 4) for ranking Kanye West songs. No backend, database, or external API keys required. Rankings persist in `localStorage`.

### Development commands

All scripts are in `package.json`:

| Task | Command |
|---|---|
| Dev server | `yarn dev` (serves on `http://localhost:5173`) |
| Lint | `yarn lint` |
| Format check | `yarn format:check` |
| Format fix | `yarn format` |
| Build | `yarn build` (runs `tsc -b && vite build`) |
| Preview prod build | `yarn preview` |

### Known issues

- `yarn lint` reports 2 pre-existing `prefer-const` errors in `src/App.tsx`. These are not regressions.
- `yarn format:check` flags 17 files with formatting differences. These are pre-existing.

### Gotchas

- The project uses **Yarn 1 (Classic)** — the lockfile is `yarn.lock`. Do not use npm or pnpm.
- Vite dev server uses port **5173** by default. Use `--host 0.0.0.0` flag when needing network access (e.g., for browser testing in Cloud Agent VMs).
- There are no automated test suites (no Jest, Vitest, etc.) configured. Manual browser testing is the primary validation method.
