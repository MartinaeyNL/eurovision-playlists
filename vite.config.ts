import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
    plugins: [
        solidPlugin(),
        /*paraglideVitePlugin({
            project: "./project.inlang",
            outdir: "./src/paraglide",
        }),*/
    ],
    server: {
        port: 3000,
    },
    build: {
        target: 'esnext',
    },
});
