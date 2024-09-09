import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/main.js",
      name: "HelloLib",
      formats: ["es", "umd"],
      fileName: (format) => `hello-lib.${format}.js`,
    },
  },
});
