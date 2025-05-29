import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Ensure your app is hosted at the root of the domain or specify a subfolder if needed
  build: {
    outDir: "dist", // Output folder for production build
  },
  server: {
    // This is helpful if you're running a local server with React Router's BrowserRouter
    historyApiFallback: true,
  },
});
