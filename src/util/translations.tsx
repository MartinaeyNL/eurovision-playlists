import * as i18n from "@solid-primitives/i18n";

import type * as gb from "../translations/gb";

export type Locale = "gb" | "nl";
export type RawDictionary = typeof gb.dict;
export type Dictionary = i18n.Flatten<RawDictionary>;

export async function fetchDictionary(locale: Locale): Promise<Dictionary> {
    const dict: RawDictionary = (await import(`../translations/${locale}.ts`)).dict;
    return i18n.flatten(dict); // flatten the dictionary to make all nested keys available top-level
}