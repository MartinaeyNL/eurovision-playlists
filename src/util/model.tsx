
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