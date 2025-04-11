import type {Component} from "solid-js";
import {setAppearance, setLocale} from "../../stores/preferences";
import {AppearanceMode} from "../../models/ui-models";

import styles from './Header.module.css';

const Header: Component = () => {
    return (
        <header class={styles.Header}>
            <div class={styles.Prefix}>
                <h1>EurovisionPlaylists</h1>
            </div>
            <div class={styles.Center}>
                <button onClick={() => setAppearance(AppearanceMode.DARK)}>Dark</button>
                <button onClick={() => setAppearance(AppearanceMode.LIGHT)}>Light</button>
            </div>
            <div class={styles.Suffix}>
                <button onClick={() => setLocale("nl")}>NL</button>
                <button onClick={() => setLocale("en")}>EN</button>
            </div>
        </header>
    )
}

export default Header;