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
    const onWheel = throttle((ev: WheelEvent) => {
        ev.deltaY > 0 ? slider.prev() : slider.next();
    }, 50)
    slider.on("created", () => {
        slider.container.addEventListener("wheel", onWheel, {
            passive: false,
        })
    })
}