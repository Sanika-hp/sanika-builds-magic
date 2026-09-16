import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When deploying to GitHub Pages under a repository sub-path, set BASE_PATH
// (e.g. "/sanika-builds-magic/"). Locally and on Lovable it stays at root.
const basePath = process.env["BASE_PATH"];

export default defineConfig({
  ...(basePath ? { base: basePath } : {}),
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
    },
  },
} as Parameters<typeof defineConfig>[0]);
