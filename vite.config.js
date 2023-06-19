import { defineConfig } from "vite"
import StimulusHMR from "vite-plugin-stimulus-hmr"

export default defineConfig({
  clearScreen: false,
  plugins: [StimulusHMR()]
})
