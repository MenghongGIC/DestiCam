import { defineConfig } from "@solidjs/start/config";
import webfontDownload from 'vite-plugin-webfont-dl'

export default defineConfig({
    vite: {
        plugins: [webfontDownload()]
    }
});
