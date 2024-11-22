import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: "./backend/public", // Carpeta de salida
    // assetsInlineLimit: 100000000, // Límites altos para inline de assets
  },
});
