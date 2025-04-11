import {createSignal} from "solid-js";
import {AppearanceMode} from "../models/ui-models";

export const [appearance, setAppearance] = createSignal(AppearanceMode.LIGHT);