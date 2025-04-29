import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { join } from 'node:path'

// https://vite.dev/config/
export default defineConfig( {
  plugins: [ react() ],
  resolve: {
    alias: {
      '@': join( __dirname, 'src' ),
    },
  },
} )
