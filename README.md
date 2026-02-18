# example-sveltekit

A server-side counter app built with [SvelteKit](https://kit.svelte.dev/) using `@sveltejs/adapter-node`, ready to deploy on [Trapiche](https://trapiche.cloud).

## Deploy on Trapiche

1. Push this repo to your GitHub account
2. Go to [trapiche.cloud](https://trapiche.cloud) and create a new deployment
3. Select this repository — Trapiche detects SvelteKit automatically
4. Done. Runs in a Docker container managed by Trapiche.

## Detection

Trapiche detects this as a **SvelteKit** app via `"@sveltejs/kit"` in `package.json`.
`adapter-node` is required — do not use `adapter-auto` or `adapter-static` for SSR deployment.
- Deploy mode: **SSR / Docker**
- Build command: `npm run build`
- Start command: `npm start` → `node build`

## Local development

```bash
npm install
npm run dev
# open http://localhost:5173
```
