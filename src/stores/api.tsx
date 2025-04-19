import {createResource, createSignal} from "solid-js";
import {SpotifyApi} from "../util/model";

interface SpotifyAccessToken {
    access_token: string;
    token_type: string;
    expires_in: number;
    expires: number;
}

/**
 * Function that fetches the Spotify access token, through our worker API.
 * The access token does NOT give access to personal data, as it's granted through oAuth2 client credentials.
 * All client IDs and secrets are stored safely in the cloud, whereof only the worker API has access.
 */
const getSpotifyAccessToken = async (): Promise<SpotifyAccessToken> => {
    console.debug("Retrieving Spotify access token from worker API...");
    const apiUrl = import.meta.env.VITE_ESCP_API_WORKER_URL;
    if(!apiUrl) {
        throw new Error("Could not get Spotify access token; worker API hasn't been initialized.");
    }
    const url = new URL(apiUrl)
    url.search = "api=spotify";
    const response = await fetch(url);
    const json = await response.json();
    console.debug("Received Spotify access token;", json);
    return json.accessToken as SpotifyAccessToken;
}

// Access tokens
export const [spotifyAccessToken] = createResource(getSpotifyAccessToken);

// API resources
export const [spotifyApi, setSpotifyApi] = createSignal<SpotifyApi>();