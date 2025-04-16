import {Component, createResource} from "solid-js";
import SearchBanner from "../../components/search-banner/SearchBanner";
import PlaylistRow from "../../components/playlist-row/PlaylistRow";
import styles from "./Home.module.css";
import {PlaylistMetadata} from "../../util/model";

const fetchPlaylists = async () => {
    const response = await fetch("data/metadata.json");
    return (await response.json()).playlists as PlaylistMetadata[];
}

const Home: Component = () => {
    const [playlists] = createResource(fetchPlaylists);
    return (
        <div class={styles.Container}>
            <SearchBanner />
            <PlaylistRow playlists={playlists()} />
        </div>
    )
}

export default Home;