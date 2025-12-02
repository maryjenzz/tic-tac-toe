import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = '/tic-tac-toe/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: repoName, 
})