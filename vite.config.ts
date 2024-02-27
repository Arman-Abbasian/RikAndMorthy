// vite.config.ts
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            // add this to cache all the imports
            workbox: {
                globPatterns: ["**/*"],
            },
            // add this to cache all the
            // static assets in the public folder
            includeAssets: [
                "**/*",
            ],
            manifest: {
              "short_name": "Rick & Morthy",
              "name": "Rick & Morthy PWA App",
              "icons": [
                  {
                      "src": "/images/maskableIcon/maskable_icon_x48.png",
                      "type": "image/png",
                      "sizes": "48x48",
                      "purpose":"any maskable"
                  },
                  {
                      "src": "/images/maskableIcon/maskable_icon_x72.png",
                      "type": "image/png",
                      "sizes": "72x72",
                      "purpose":"any maskable"
                  },
                  {
                      "src": "/images/maskableIcon/maskable_icon_x96.png",
                      "type": "image/png",
                      "sizes": "96x96",
                      "purpose":"any maskable"
                  },
                  {
                      "src": "/images/maskableIcon/maskable_icon_x128.png",
                      "type": "image/png",
                      "sizes": "128x128",
                      "purpose":"any maskable"
                  },
                  {
                      "src": "/images/maskableIcon/maskable_icon_x192.png",
                      "type": "image/png",
                      "sizes": "192x192",
                      "purpose":"any maskable"
                  },
                  {
                      "src": "/images/maskableIcon/maskable_icon_x384.png",
                      "type": "image/png",
                      "sizes": "384x384",
                      "purpose":"any maskable"
                  },
                  {
                      "src": "/images/maskableIcon/maskable_icon_x512.png",
                      "type": "image/png",
                      "sizes": "512x512",
                      "purpose":"any maskable"
                  }
              ],
              "screenshots": [
                  {
                      "src": "/images/maskableIcon/maskable_icon_x48.png",
                      "type": "image/png",
                      "sizes": "48x48",
                  },
                  {
                      "src": "/images/maskableIcon/maskable_icon_x72.png",
                      "type": "image/png",
                      "sizes": "72x72",
                  },
                  {
                      "src": "/images/maskableIcon/maskable_icon_x96.png",
                      "type": "image/png",
                      "sizes": "96x96",
                  },
                  {
                      "src": "/images/maskableIcon/maskable_icon_x128.png",
                      "type": "image/png",
                      "sizes": "128x128",
                  },
                  {
                      "src": "/images/maskableIcon/maskable_icon_x192.png",
                      "type": "image/png",
                      "sizes": "192x192",
                  },
                  {
                      "src": "/images/maskableIcon/maskable_icon_x384.png",
                      "type": "image/png",
                      "sizes": "384x384",
                  },
                  {
                      "src": "/images/maskableIcon/maskable_icon_x512.png",
                      "type": "image/png",
                      "sizes": "512x512",
                  }
              ],
              "start_url": ".",
              "display": "standalone",
              "theme_color": "#000000",
              "background_color": "#ffffff"
            },
          }),
    ],
});