import {Component, createResource} from "solid-js";
import SearchBanner from "../../components/search-banner/SearchBanner";
import PlaylistRow from "../../components/playlist-row/PlaylistRow";
import styles from "./Home.module.css";
import {playlists, tags} from "../../stores/data";

const Home: Component = () => {
    return (
        <div class={styles.Container}>
            <SearchBanner />
            <PlaylistRow playlists={playlists()} tags={tags()} />
        </div>
    )
}

export default Home;