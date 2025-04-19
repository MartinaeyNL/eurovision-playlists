import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
    base: '/eurovision-playlists',
    plugins: [
        solidPlugin()
    ],
    server: {
        port: 3000,
    },
    build: {
        target: 'esnext',
    },
    resolve: {
        alias: {
            data: "/data",
            assets: "/src/assets",
        }
    }
});
