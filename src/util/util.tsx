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
    console.debug("Initializing Wheel Controls plugin!");
    const onWheel = (ev: WheelEvent) => {
        // Cancel window scroll when slider is scrollable (when there are more slides than visible)
        const scrollable = slider.slides.length > (slider.options?.slides?.perView || 1);
        if(scrollable) ev.preventDefault();
        ev.deltaY > 0 ? slider.prev() : slider.next();
    }
    slider.on("created", () => {
        slider.container.addEventListener("wheel", onWheel, {
            passive: false,
        })
    })
}

export const CarouselPlugin = (slider: any) => {
    console.debug("Initializing Carousel plugin!");
    const z = 300;
    const rotate = () => {
        const deg = 360 * slider.track.details.progress
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    }
    slider.on("created", () => {
        const deg = 360 / slider.slides.length
        slider.slides.forEach((element: HTMLElement, idx: number) => {
            element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
        })
        rotate()
    })
    slider.on("detailsChanged", rotate)
}