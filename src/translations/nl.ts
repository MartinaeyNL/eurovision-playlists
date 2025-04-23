import { template } from "@solid-primitives/i18n";

export const dict = {
    goodbye: ({ name }: { name: string }) => `Tot ziens ${name}`,
    mainMenu: {
        home: "Home",
        playlists: "Playlists",
        artists: "Artiesten",
        contribute: "Draag bij",
        about: "Over ons",
    },
    searchBanner: {
        title: "Welke playlist zoek je?"
    },
    tags: {
        official: "Officieel",
        nf: "NF"
    },
    home: {
        2025: "De inzendingen van dit jaar!",
        nf: "Beleef de nationale finales nog één keer!",
        mix: "Luister eindeloos naar deze mixes!"
    }
};