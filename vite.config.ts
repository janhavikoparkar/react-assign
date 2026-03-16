// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-assign/", // EXACT repo name
  plugins: [react()],
});
