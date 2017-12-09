Spotify app to rearrange tracks in playlists

Seems to be a missing feature:
* https://community.spotify.com/t5/Closed-Ideas/Rearrange-Playlists-in-Mobile-App/idi-p/588188
* https://community.spotify.com/t5/Web-Player/Is-there-a-way-to-re-order-playlists/td-p/664360

# Installation
npm i

# Current version:
v0.0.7

# Libraries used:
* Handlebar (4.0.10): http://handlebarsjs.com/
* Just Handlebars Helpers (1.0.13): https://github.com/leapfrogtechnology/just-handlebars-helpers
* Sortable.js (1.6.1): http://rubaxa.github.io/Sortable/
* Jquery (3.2.1): http://jquery.com/
* Bootstrap CSS (3.3.1): https://getbootstrap.com/docs/3.3/css/
* Spotify Web API (0.22.1): https://github.com/jmperez/spotify-web-api-js

# TODO
* Renumber tracks after upload
* Move `Load tracks` to the front of the line
* Add random shuffle option to playlist sorter
* When loading tracks, hide the playlists
* When done with the tracks, show the playlists
* Use [Search API|https://developer.spotify.com/web-api/search-item/] to find a playlist
* Rearrange more than 100 tracks
  * To fix this, the tracks beyond 100 need to be downloaded in multiple steps, 
    then the playlist needs to be recreated using a call to [Replace a Playlist’s Tracks|https://developer.spotify.com/web-api/replace-playlists-tracks/]
    then multiple calls to [Add Tracks to a Playlist|https://developer.spotify.com/web-api/replace-playlists-tracks/]
* Play songs in place

# Other
# SSL Certificates on deployed site: https://letsencrypt.org/getting-started/ and https://certbot.eff.org/
# Icon from: https://www.iconfinder.com/search/?q=shuffle&type=vector&price=free
