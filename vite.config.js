import { defineConfig } from "vite";
import copy from "rollup-plugin-copy";

export default defineConfig({
  base: "/dragon_clicker/",
  build: {
    rollupOptions: {
      output: {
        dir: "dist",
      },
    },
  },

  plugins: [
    copy({
      targets: [
        { src: "assets", dest: "dist" }, // Copier le répertoire "images" dans "dist/images"
      ],
      hook: "writeBundle",
    }),
  ],
});
