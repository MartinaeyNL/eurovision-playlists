import {Component, createResource} from "solid-js";
import SearchBanner from "../../components/search-banner/SearchBanner";
import PlaylistRow from "../../components/playlist-row/PlaylistRow";
import styles from "./Home.module.css";
import {playlists, tags} from "../../stores/data";
import * as i18n from "@solid-primitives/i18n";
import {langDictionary} from "../../stores/preferences";
import {PlaylistMetadata} from "../../util/model";

const Home: Component = () => {
    const t = i18n.translator(langDictionary);

    // Get top row playlists; "getting ready for 2025!"
    const readyFor2025Ids = ["cc9e59ac-f954-4b43-bf43-894d61329f8b", "74692d04-34be-4942-8ec0-0aa5889d936c", "fc295876-1c61-49cb-b38b-8f7366b6f70c", "41dda7b7-a93c-4030-b4f4-0d5ec3d4cf11", "62fd613d-6d67-4cda-883a-b22fd9d39f73", "61ddc34c-c85b-4865-bd0f-23c37e380821", "320b960a-0eb3-4e3c-b636-8d963bb3b0ae"]
    const playlists2025 = () => readyFor2025Ids.map(id => playlists()?.find(p => p.id === id)).filter(p => p) as PlaylistMetadata[];
    const playlistsNF = () => playlists()?.filter(s => !playlists2025()?.includes(s) && s.tags.includes('2025') && s.tags.includes('nf'))
    const playlistsMix = () => playlists()?.filter(s => !playlists2025()?.includes(s) && !playlistsNF()?.includes(s) && s.tags.includes('mix'))
    return (
        <div class={styles.Container}>
            <SearchBanner />
            <PlaylistRow title={t("home.2025") as string} playlists={playlists2025()} tags={tags()} />
            <PlaylistRow title={t("home.nf") as string} playlists={playlistsNF()} tags={tags()} />
            <PlaylistRow title={t("home.mix") as string} playlists={playlistsMix()} tags={tags()} />
        </div>
    )
}

export default Home;