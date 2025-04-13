import { template } from "@solid-primitives/i18n";

export const dict = {
    goodbye: ({ name }: { name: string }) => `Tot ziens ${name}`,
    mainMenu: {
        home: "Home",
        about: "Over ons",
    },
};