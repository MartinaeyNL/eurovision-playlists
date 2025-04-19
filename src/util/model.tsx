import SpotifyWebApi from "spotify-web-api-js";
import SpotifyWebApiJs = SpotifyWebApi.SpotifyWebApiJs;

export interface PlaylistMetadata {
    id: string;
    tags: string[];
    title: string;
    author: string;
    desc: string;
    img?: string;
    uri: PlaylistUri;
}

export interface PlaylistUri {
    yt?: string;
    sp?: string;
}

export interface SpotifyApi extends SpotifyWebApiJs {

}