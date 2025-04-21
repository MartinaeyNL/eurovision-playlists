import {Component, createResource, For, Show} from "solid-js";
import {badge} from "@vaadin/vaadin-lumo-styles/badge.js";
import Badge from "../badge/Badge";
import {PlaylistMetadata} from "../../util/model";
import {Icon} from "@iconify-icon/solid";
import styles from "./PlaylistCard.module.css";
import {spotifyApi} from "../../stores/api";
import * as i18n from "@solid-primitives/i18n";
import {langDictionary, locale} from "../../stores/preferences";
import {A} from "@solidjs/router";
import {nfFlags} from "../../stores/data";

interface PlaylistCardProps {
    playlist: PlaylistMetadata;
    badges?: Record<string, string>
}

const fetchPlaylistImg = async (id?: string) => {
    if(!id) return;
    return spotifyApi()?.getPlaylistCoverImage(id);
}

const fetchPlaylistFlagIcon = async (tag?: string) => {
    if(!tag) return "";
    return `flag:${nfFlags()?.[tag]}-4x3`;
}

const PlaylistCard: Component<PlaylistCardProps> = (props: PlaylistCardProps) => {
    console.log(`Loading playlist card for ${props.playlist.title}..`);

    const t = i18n.translator(langDictionary);
    const [playlistImg] = createResource(
        () => spotifyApi() ? props.playlist.uri.sp : null,
        fetchPlaylistImg
    );

    const [flagIcon] = createResource(
        () => nfFlags() ? props.playlist.tags.find(t => nfFlags()?.[t]) : null,
        fetchPlaylistFlagIcon
    )

    return (
        <div>
            <style>${badge.cssText}</style>
            <A href={`/playlist/${props.playlist.id}`}>
                <vaadin-card theme="cover-media">
                    <img slot="media" src={props.playlist.img || playlistImg()?.[0].url || 'src/assets/abstract_background_light.svg'} alt=""/>
                    <div slot="title">
                        <span>{props.playlist.title}</span>
                        <Show when={flagIcon()}>
                            <Icon class={styles.MenuIcon} inline icon={flagIcon() as string} />
                        </Show>
                    </div>
                    <span slot="subtitle">{props.playlist.author}</span>
                    <div class={styles.FooterRow}>
                        <div class={styles.BadgeRow}>
                            <For each={props.playlist.tags.filter((_, index) => index < 2)}>
                                {(item, index) => (<Badge label={t(`tags.${item}` as any) || item} color={props.badges?.[item.toLowerCase()] || 'green'}/>)}
                            </For>
                        </div>
                        <div class={styles.IconRow}>
                            <Show when={props.playlist.uri.sp}>
                                <A href={`https://open.spotify.com/playlist/${props.playlist.uri.sp}`}>
                                    <Icon icon="mdi:spotify"/>
                                </A>
                            </Show>
                            <Show when={props.playlist.uri.yt}>
                                <A href={`https://music.youtube.com/playlist?list=${props.playlist.uri.yt}`}>
                                    <Icon icon="material-symbols:play-circle-outline"/>
                                </A>
                            </Show>
                        </div>
                    </div>
                </vaadin-card>
            </A>
        </div>
    )
}

export default PlaylistCard;