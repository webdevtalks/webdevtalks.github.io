import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: env.VITE_BASE_URL,
    plugins: [
      react(),
      {
        name: 'copy-404',
        closeBundle() {
          copyFileSync(resolve('404.html'), resolve('dist/404.html'));
        },
      },
    ],
  }
})