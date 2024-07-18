import peggyLoader from "vite-plugin-peggy-loader";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [peggyLoader()]
})