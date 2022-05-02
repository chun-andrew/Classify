
const axios = require('axios');

//list of playlists the the user chose for new playlist **will update to value from chooseplaylists**

const chosenPlaylists = [];

var allSongs = Array();

for(i=0; i < chosenPlaylists.length; i++){ 
    if (i=0) {
        allSongs= getSongsArray(chosenPlaylists(1));
    } else {
    allSongs.append(getSongsArray(i));
    }
}

function getSongsArray(playlist){ 
    axios.get()

}

