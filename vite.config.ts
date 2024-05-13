import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@mui/base", "@mui/material", "@mui/system"],
  },
  resolve: {
    alias: {
      "@": resolve("./src"),
    },
  },
});
