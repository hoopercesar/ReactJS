import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// esta es la configuración que Vite permite para usar variables de ambiente (.env)
// sin embargo, no es una opción segura porque quedan expuestas en el usuario
// la alternaiva es usa el DOMAIN y CLIENT_ID desde el servidor.
// de momento lo dejo así para que funcione. 

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
    'process.env.REACT_AUTH0_DOMAIN': JSON.stringify(env.REACT_AUTH0_DOMAIN),
    'process.env.REACT_AUTH0_CLIENT_ID': JSON.stringify(env.REACT_AUTH0_CLIENT_ID),
  },
  plugins: [react()],
  server: {
    port: 5173,
  },
  }
  
  
})
