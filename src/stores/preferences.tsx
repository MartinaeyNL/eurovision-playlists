import {createResource, createSignal} from "solid-js";
import {AppearanceMode} from "../models/ui-models";
import {fetchDictionary, Locale} from "../util/translations";

// Appearance related
export const [appearance, setAppearance] = createSignal(AppearanceMode.LIGHT);

// Language related
export const [locale, setLocale] = createSignal<Locale>("gb");
export const [langDictionary] = createResource(locale, fetchDictionary);

// Router related
export const [navigate, setNavigator] = createSignal<any>();