/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://www.youtube.com/watch?v=G-4zgIPsjkU&ab_channel=EricWinkDev Used this video to set up the test environment
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles:"./src/test/setup.ts"
  }
});
