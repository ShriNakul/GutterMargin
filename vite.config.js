import { defineConfig } from "vite";
import react from "@vitejs/react-vite-plugin";

export default defineConfig({
  plugins: [react()],
  base: "/GutterMargin/",
});
