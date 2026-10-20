import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Can either use no base or base = "/" as I am using a custom domain
export default defineConfig({
  plugins: [react()]
});
