import { template } from "@solid-primitives/i18n";

export const dict = {
    goodbye: ({ name }: { name: string }) => `Tot ziens ${name}`,
    mainMenu: {
        home: "Home",
        randomArtist: "Willekeurige artiest",
        about: "Over ons",
    },
    searchBanner: {
        title: "Welke playlist zoek je?"
    }
};