import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// O nome do seu repositório é 'tic-tac-toe'
// REVERTA PARA O CAMINHO RELATIVO COMPLETO DO SUBDIRETÓRIO
const repoName = '/tic-tac-toe/'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // A base deve ser o nome do repositório, com barras laterais.
  base: repoName, 
})