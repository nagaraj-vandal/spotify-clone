import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
    'user-read-private', 
    'user-read-email', 
    'playlist-read-private', 
    'playlist-modify-public', 
    'playlist-modify-private',
    'streaming',
    'user-library-read',
    'user-top-read',
    'user-read-playback-state',
    'user-read-recently-played',
    'user-follow-read',
    'user-modify-playback-state',
    'playlist-read-collaborative'
].join(',');


const params = {
    scope : scopes,
}

const queryParamString = new URLSearchParams(params)
const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;


const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,

});


export default spotifyApi;

export { LOGIN_URL };