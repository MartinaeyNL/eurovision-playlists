import type {Component} from 'solid-js';
import {Router, Route, useNavigate} from "@solidjs/router";
import {appearance, langDictionary, setNavigator} from "./stores/preferences";
import {getAppearanceStyles} from "./util/util";
import * as i18n from "@solid-primitives/i18n";

import styles from './App.module.css';
import Home from "./pages/home/Home";
import Playlist from "./pages/playlist/Playlist";
import About from "./pages/about/About";
import Header from "./layout/header/Header";
import RandomArtist from "./pages/random-artist/RandomArtist";

// Import Vaadin customElements
import "@vaadin/button";
import "@vaadin/card";
import "@vaadin/menu-bar";
import "@vaadin/select";
import "@vaadin/tabsheet";
import "@vaadin/tabs";
import "@vaadin/text-field";

/**
 * Listing all customElements, so they're recognised by SolidJS
 * https://github.com/solidjs/solid/issues/616#issuecomment-903399876
 */
declare module "solid-js" {
    namespace JSX {
        interface IntrinsicElements {
            "vaadin-button": any,
            "vaadin-card": any,
            "vaadin-menu-bar": any,
            "vaadin-select": any,
            "vaadin-tabsheet": any,
            "vaadin-tabs": any,
            "vaadin-tab": any,
            "vaadin-text-field": any
        }
    }
}

const Layout: Component = (props: any) => {
    setNavigator(useNavigate);
    return (
        <>
            <Header />
            {props.children}
        </>
    )
}

const App: Component = () => {

    const t = i18n.translator(langDictionary);

    // Enable 'preview' components like vaadin-card;
    // @ts-ignore
    window.Vaadin.featureFlags.cardComponent = true;

    return (
        <div class={`${styles.App} ${getAppearanceStyles(appearance())}`}>
            <div class={styles.Content}>
                <Router base="eurovision-playlists" root={Layout}>
                    <Route path="/" component={Home} />
                    <Route path="/playlist/:id" component={Playlist}/>
                    <Route path="/random-artist" component={RandomArtist} />
                    <Route path="/about" component={About}/>
                </Router>
            </div>
            <span>{t("goodbye", {name: 'Martin'})}</span>
        </div>
    );
};

export default App;
