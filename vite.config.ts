import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({

    plugins: [
      react(), 
      viteStaticCopy({
        targets: [
          {
            src: ['static/*.csv', 'static/*.json'],
            dest: '.'
          }
        ]
      })
    ],
    base: process.env.VITE_BASE_URL ?? '',
    define: {
      'process.env': process.env
    }

  })
}
