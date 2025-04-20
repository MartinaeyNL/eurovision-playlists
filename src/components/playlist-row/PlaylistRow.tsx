import {Component, For, Show} from "solid-js";
import styles from "./PlaylistRow.module.css";
import PlaylistCard from "../playlist-card/PlaylistCard";
import { createSlider } from "solid-slider"
import {KeenSliderOptions} from "keen-slider";
import "solid-slider/slider.css";
import {WheelControlsPlugin} from "../../util/util";
import {PlaylistMetadata} from "../../util/model";

const sliderOptions = {
    rubberband: false,
    breakpoints: {
        "(min-width: 320px)": {
            slides: { perView: 1.5, spacing: 16 }
        },
        "(min-width: 768px)": {
            slides: { perView: 2.5, spacing: 16 }
        },
        "(min-width: 992px)": {
            slides: { perView: 3.5, spacing: 16 }
        },
        "(min-width: 1200px)": {
            slides: { perView: 4.5, spacing: 32 }
        },
        "(min-width: 1600px)": {
            slides: { perView: 5.5, spacing: 32 }
        },
        "(min-width: 2000px)": {
            slides: { perView: 6.5, spacing: 32 }
        }
    }
} as KeenSliderOptions

interface PlaylistRowProps {
    playlists?: PlaylistMetadata[];
    tags?: Record<string, string>;
}

const PlaylistRow: Component<PlaylistRowProps> = (props: PlaylistRowProps) => {
    const [slider] = createSlider(sliderOptions, WheelControlsPlugin);
    return (
        <div class={styles.Container}>
            <h2>Row details</h2>
            <Show when={props.playlists?.length}>
                <div use:slider>
                    <For each={props.playlists} fallback={<div>Loading...</div>}>
                        {(item) => (<PlaylistCard playlist={item} badges={props.tags} />)}
                    </For>
                </div>
            </Show>
        </div>
    )
}

export default PlaylistRow;