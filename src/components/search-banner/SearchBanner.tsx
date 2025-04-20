import type {Component} from "solid-js";
import SearchContainer from "../search-container/SearchContainer";
import styles from "./SearchBanner.module.css"
import * as i18n from "@solid-primitives/i18n";
import {langDictionary} from "../../stores/preferences";

const SearchBanner: Component = () => {
    const t = i18n.translator(langDictionary);
    return (
        <div class={styles.Container}>
            <div class={styles.Content}>
                <h2>{t("searchBanner.title")}</h2>
                <SearchContainer />
            </div>
        </div>
    )
}

export default SearchBanner;