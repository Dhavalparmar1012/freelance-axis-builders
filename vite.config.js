import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        services: "services.html",
        contact: "contact.html",
      },
    },
  },
});
