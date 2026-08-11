import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If deploying to GitHub Pages under a repo (not a custom domain or user/org page),
  // set base to '/YOUR_REPO_NAME/'. For Vercel/Netlify or a user/org page, leave as '/'.
  base: '/',
})
