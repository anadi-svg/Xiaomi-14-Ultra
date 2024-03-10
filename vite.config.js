import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";
import legacy from '@vitejs/plugin-legacy'


// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    react(),
    viteSingleFile(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],

});
