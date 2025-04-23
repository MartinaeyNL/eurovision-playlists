import {Component, For, Show} from "solid-js";
import {CarouselPlugin, WheelControlsPlugin} from "../../util/util";
import styles from "./PlaylistCarousel.module.css";
import PlaylistCard from "../../components/playlist-card/PlaylistCard";
import {PlaylistMetadata} from "../../util/model";
import { createSlider } from "solid-slider"
import {KeenSliderOptions} from "keen-slider";
import "solid-slider/slider.css";

const sliderOptions = {
    loop: true,
    renderMode: "custom"
} as KeenSliderOptions

interface PlaylistRowProps {
    playlists?: PlaylistMetadata[];
}

const PlaylistCarousel: Component<PlaylistRowProps> = (props: PlaylistRowProps) => {
    const [slider] = createSlider(sliderOptions, CarouselPlugin, WheelControlsPlugin);
    return (
        <Show when={props.playlists?.length}>
            <div class={styles.Wrapper}>
                <div class={styles.Scene}>
                    <div use:slider class={styles.KeenSlider}>
                        <For each={props.playlists?.filter((_, idx) => idx < 6)} fallback={<div>Loading...</div>}>
                            {(item) => (
                                <div class={styles.Slide}>
                                    <PlaylistCard playlist={item} mediaOnly />
                                </div>
                            )}
                        </For>
                    </div>
                </div>
            </div>
        </Show>
    )
}
export default PlaylistCarousel;
