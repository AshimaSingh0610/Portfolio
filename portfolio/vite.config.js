import { defineConfig } from 'vite'

//To get tailwind plugin
import tailwindcss from '@tailwindcss/vite'

import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()], //populate array
})
