import { template } from "@solid-primitives/i18n";

export const dict = {
    goodbye: ({ name }: { name: string }) => `goodbye ${name}`,
    mainMenu: {
        home: "Home",
        randomArtist: "Random artist",
        about: "About us",
    },
    searchBanner: {
        title: "Looking for a playlist?"
    }
};