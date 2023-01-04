import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import Checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default (props) => {
  process.env = { ...process.env, ...loadEnv(props.mode, process.cwd()) }

  return defineConfig({
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: `${process.env.VITE_APP_ENDPOINT}`,
          changeOrigin: true,
        },
      },
    },
    preview: {
      port: 8080,
    },
    plugins: [react(), tsconfigPaths(), Checker({ typescript: true })],
    build: {
      outDir: 'build',
    },
  })
}
