import type {Component} from "solid-js";
import SearchBanner from "../../components/search-banner/SearchBanner";
import PlaylistRow from "../../components/playlist-row/PlaylistRow";
import styles from "./Home.module.css";

const Home: Component = () => {
    return (
        <div class={styles.Container}>
            <SearchBanner />
            <PlaylistRow />
        </div>
    )
}

export default Home;