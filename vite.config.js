import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com//JorgeBadran/React-Rick-and-Morty-API",
  plugins: [react()],
})
