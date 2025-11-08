import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Site/', // Para funncionar no git hub pages saporra
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});


