var redirect_uri = "https://devin-lepur.github.io/spotify_project/";


var client_id = "";
var client_secret = "";

const AUTHORIZE = "https://accounts.spotify.com/authorize";

function OnPageLoad() {

}


function requestAuthorization() {
    client_id = document.getElementById("clientId").value;
    client_secret = document.getElementById("clientSecret").value;

    let url = AUTHORIZE;
    url += "?client_id=" + client_id;
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURI(redirect_uri);
    url += "&show_dialog=true";
    url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
    window.location.href = url; // Show Spotify's authorization screen
}