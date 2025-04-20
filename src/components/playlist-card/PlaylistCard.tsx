import {Component, createResource, For, Show} from "solid-js";
import {badge} from "@vaadin/vaadin-lumo-styles/badge.js";
import Badge from "../badge/Badge";
import {PlaylistMetadata} from "../../util/model";
import {Icon} from "@iconify-icon/solid";
import styles from "./PlaylistCard.module.css";
import {spotifyApi} from "../../stores/api";

interface PlaylistCardProps {
    playlist: PlaylistMetadata;
    badges?: Record<string, string>
}

const fetchPlaylistImg = async (id?: string) => {
    if(!id) return;
    return spotifyApi()?.getPlaylistCoverImage(id);
}

const PlaylistCard: Component<PlaylistCardProps> = (props: PlaylistCardProps) => {
    console.log(`Loading playlist card for ${props.playlist.title}..`);
    const [playlistImg] = createResource(
        () => spotifyApi() ? props.playlist.uri.sp : null,
        fetchPlaylistImg
    );

    return (
        <div>
            <style>${badge.cssText}</style>
            <vaadin-card theme="cover-media">
                <img slot="media" src={props.playlist.img || playlistImg()?.[0].url || 'src/assets/abstract_background_light.svg'} alt=""/>
                <span slot="title">{props.playlist.title}</span>
                <span slot="subtitle">{props.playlist.author}</span>
                {/*<span>{props.playlist.desc}</span>*/}
                <div class={styles.FooterRow}>
                    <div class={styles.BadgeRow}>
                        <For each={props.playlist.tags}>
                            {(item, index) => (<Badge label={item} color={props.badges?.[item.toLowerCase()] || 'green'}/>)}
                        </For>
                    </div>
                    <div class={styles.IconRow}>
                        <Show when={props.playlist.uri.sp}>
                            <a href={`https://open.spotify.com/playlist/${props.playlist.uri.sp}`}>
                                <Icon icon="mdi:spotify"/>
                            </a>
                        </Show>
                        <Show when={props.playlist.uri.yt}>
                            <a href={`https://music.youtube.com/playlist?list=${props.playlist.uri.yt}`}>
                                <Icon icon="material-symbols:play-circle-outline"/>
                            </a>
                        </Show>
                    </div>
                </div>
            </vaadin-card>
        </div>
    )
}

export default PlaylistCard;