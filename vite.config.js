import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    lib: {
      // eslint-disable-next-line no-undef
      entry: resolve(__dirname, "lib/main.ts"),
      fileName: () => {
        return `humanist-badge-lib.js`
      },
      formats: ["iife"],
      name: "HumanistBadgeLib",
    },
  },
})
