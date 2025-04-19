import {PlaylistMetadata} from "../util/model";
import {createResource} from "solid-js";

const fetchPlaylists = async () => {
    const response = await import("data/metadata.json");
    return response.playlists as PlaylistMetadata[];
}
export const [playlists] = createResource(fetchPlaylists);

const fetchTags = async () => {
    const response = await import("data/tags.json") as { default: Record<string, string> };
    return response.default;
}
export const [tags] = createResource(fetchTags);