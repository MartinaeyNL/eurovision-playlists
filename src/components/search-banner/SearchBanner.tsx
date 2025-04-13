import type {Component} from "solid-js";
import SearchContainer from "../search-container/SearchContainer";
import styles from "./SearchBanner.module.css"

const SearchBanner: Component = () => {
    return (
        <div class={styles.Container}>
            <div class={styles.Content}>
                <h2>Looking for your playlist?</h2>
                <SearchContainer />
            </div>
        </div>
    )
}

export default SearchBanner;