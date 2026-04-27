import { defineConfig } from "@solidjs/start/config";

import webfontDownload from 'vite-plugin-webfont-dl'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    vite: {
        plugins: [tailwindcss(), webfontDownload()],
    },
});
