// vite.config.ts
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import path from 'path'

export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths(), svgr()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      src: path.resolve('src/'),
    },
  }
})
