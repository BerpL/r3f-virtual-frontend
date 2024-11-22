import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    global: {}, // Define un objeto global vacío
  },
  optimizeDeps: {
    include: [
      "zustand",
      "use-sync-external-store/shim/with-selector.js",
      "@radix-ui/react-tooltip",
      "@radix-ui/react-portal",
      "@radix-ui/react-popper",
      "@radix-ui/react-presence",
      "@radix-ui/react-dismissable-layer",
    ],
  },
});
