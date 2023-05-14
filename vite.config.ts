import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "/components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
      {
        find: "/context",
        replacement: path.resolve(__dirname, "./src/context"),
      },
      {
        find: "/constants",
        replacement: path.resolve(__dirname, "./src/constants"),
      },
      {
        find: "/icons",
        replacement: path.resolve(__dirname, "./src/icons"),
      },
      {
        find: "/views",
        replacement: path.resolve(__dirname, "./src/views"),
      },
      {
        find: "/fonts",
        replacement: path.resolve(__dirname, "./src/fonts"),
      },
    ],
  },
});
