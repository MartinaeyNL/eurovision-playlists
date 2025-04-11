import type {Component} from "solid-js";

import styles from './Header.module.css';

const Header: Component = () => {
    return (
        <header class={styles.Header}>
            <div class={styles.Prefix}>
                <h1>EurovisionPlaylists</h1>
            </div>
            <div class={styles.Center}>

            </div>
            <div class={styles.Suffix}>

            </div>
        </header>
    )
}

export default Header;