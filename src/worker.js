import { SpotifyApi } from '@spotify/web-api-ts-sdk';

export default {
    async fetch(request, env, ctx) {
        const req = new Request(request);
        const url = new URL(req.url);

        const responseHeaders = {
            "Access-Control-Allow-Origin": "*"
        }

        const params = new URLSearchParams(url.searchParams);
        switch (params.get("api")) {

            /* Initialize spotify API, and request access token */
            case "spotify": {
                if(!env.SPOTIFY_CLIENT_ID || !env.SPOTIFY_CLIENT_SECRET) {
                    return new Response("Could not request Spotify token", { status: 500, headers: responseHeaders })
                }
                const sdk = SpotifyApi.withClientCredentials(env.SPOTIFY_CLIENT_ID, env.SPOTIFY_CLIENT_SECRET);
                try {
                    const authResponse = await sdk.authenticate();
                    if(authResponse.authenticated) {
                        return Response.json(authResponse, { headers: responseHeaders });
                    } else {
                        return new Response("Could not authenticate with Spotify", { status: 500, headers: responseHeaders })
                    }
                } catch (ex) {
                    return new Response(ex, { status: 500, headers: responseHeaders})
                }
            }
        }

        /* Otherwise, sent a 404 */
        return new Response(null, { status: 404, headers: responseHeaders })
    },
};