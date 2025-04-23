import { template } from "@solid-primitives/i18n";

export const dict = {
    goodbye: ({ name }: { name: string }) => `goodbye ${name}`,
    mainMenu: {
        home: "Home",
        playlists: "Playlists",
        artists: "Artists",
        about: "About us",
    },
    searchBanner: {
        title: "Looking for a playlist?"
    },
    tags: {
        official: "Official",
        nf: "NF"
    },
    home: {
        2025: "This years' entries!",
        nf: "Enjoy the national finals once more!",
        mix: "Listen endlessly to these mixes!"
    }
};