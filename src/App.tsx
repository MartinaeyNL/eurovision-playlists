import {Component, createEffect} from 'solid-js';
import {Router, Route, useNavigate} from "@solidjs/router";
import {appearance, langDictionary, setNavigator} from "./stores/preferences";
import {getAppearanceStyles} from "./util/util";
import * as i18n from "@solid-primitives/i18n";
import {setSpotifyApi, spotifyAccessToken} from "./stores/api";
import SpotifyWebApi from "spotify-web-api-js";

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
import {SpotifyApi} from "./util/model";

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

    createEffect(() => {

        // Initialize Spotify API
        const accessToken = spotifyAccessToken();
        if(accessToken) {
            const spotifyApi = new SpotifyWebApi() as SpotifyApi;
            spotifyApi.setAccessToken(accessToken.access_token);
            setSpotifyApi(spotifyApi);
            console.debug("Initialized Spotify API!");
        }
    })

    return (
        <div class={`${styles.App} ${getAppearanceStyles(appearance())}`}>
            <Router root={Layout}>
                <Route path="/" component={Home} />
                <Route path="/playlist/:id" component={Playlist}/>
                <Route path="/random-artist" component={RandomArtist} />
                <Route path="/about" component={About}/>
                <Route path="*404" component={Home} />
            </Router>
        </div>
    );
};

export default App;
