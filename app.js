var redirect_uri = "https://devin-lepur.github.io/spotify_project/"


//For the purposes of this project, client_secret is accessable to the user
//in true applications, this should never be accessable by the user
var client_id = "47911132bbe548e283bd3c2e5c47eae9";
var client_secret = "1a8b64b81e864fe7bab94449a862b778";

const AUTHORIZE = "https://accounts.spotify.com/authorize"

function OnPageLoad() {

}


function requestAuthorization() {
    let url = AUTHORIZE;
    url += "?client_id=" + client_id;
    url += "&responsetype=code";
    url += "&redirect_uri=" + encodeURI(redirect_uri);
    url += "&show_dialog=true"
    url += "&scope=user-read-private user-real-email";
    window.location.href = url; // Display Spotify authorization screen
}