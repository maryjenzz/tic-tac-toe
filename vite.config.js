import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'https://github.com/maryjenzz/tic-tac-toe'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: repoName, 
})