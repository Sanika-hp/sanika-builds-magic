import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/sanika-builds-magic/",
  tanstackStart: {
    server: { entry: "server" },
  },
});
