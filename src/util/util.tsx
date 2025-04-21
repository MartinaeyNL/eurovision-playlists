import {AppearanceMode} from "../models/ui-models";
import { throttle } from "@solid-primitives/scheduled";

import appStyles from '../App.module.css';

export function getAppearanceStyles(appearance: AppearanceMode) {
    switch (appearance) {
        case AppearanceMode.LIGHT: {
            return appStyles.AppLight;
        }
        case AppearanceMode.DARK: {
            return appStyles.AppDark;
        }
    }
}

export const WheelControlsPlugin = (slider: any) => {
    const onWheel = (ev: WheelEvent) => {
        // Cancel window scroll when slider is scrollable (when there are more slides than visible)
        const scrollable = slider.slides.length > slider.options.slides.perView;
        if(scrollable) ev.preventDefault();
        ev.deltaY > 0 ? slider.prev() : slider.next();
    }
    slider.on("created", () => {
        slider.container.addEventListener("wheel", onWheel, {
            passive: false,
        })
    })
}