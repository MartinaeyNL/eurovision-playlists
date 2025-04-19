import {Component, For, Show} from "solid-js";
import {badge} from "@vaadin/vaadin-lumo-styles/badge.js";
import Badge from "../badge/Badge";
import {PlaylistMetadata} from "../../util/model";
import {Icon} from "@iconify-icon/solid";
import styles from "./PlaylistCard.module.css";

interface PlaylistCardProps {
    playlist: PlaylistMetadata;
    badges?: Record<string, string>
}

const PlaylistCard: Component<PlaylistCardProps> = (props: PlaylistCardProps) => {
    return (
        <div>
            <style>${badge.cssText}</style>
            <vaadin-card theme="cover-media">
                <img slot="media" src={props.playlist.img || 'src/assets/abstract_background_light.svg'} alt=""/>
                <span slot="title">{props.playlist.title}</span>
                <span slot="subtitle">{props.playlist.author}</span>
                <div class={styles.BadgeRow} slot="header-suffix">
                    <For each={props.playlist.tags}>
                        {(item, index) => (<Badge label={item} color={props.badges?.[item.toLowerCase()] || 'green'} />)}
                    </For>
                </div>
                <span>{props.playlist.desc}</span>
                <div class={styles.IconRow}>
                    <Show when={props.playlist.uri.sp}>
                        <a href={`https://open.spotify.com/playlist/${props.playlist.uri.sp}`}>
                            <Icon icon="mdi:spotify" />
                        </a>
                    </Show>
                    <Show when={props.playlist.uri.yt}>
                        <a href={`https://music.youtube.com/playlist?list=${props.playlist.uri.yt}`}>
                            <Icon icon="material-symbols:play-circle-outline" />
                        </a>
                    </Show>
                </div>
            </vaadin-card>
        </div>
    )
}

export default PlaylistCard;