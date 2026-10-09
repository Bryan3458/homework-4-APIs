// *********************************************************************
// Homework 4 APIs
// *********************************************************************

function convertMsToMinSec(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const paddedSeconds = String(seconds).padStart(2, '0');
  return `${minutes}:${paddedSeconds}`;
}

// **************** Update code below  **************** 


// IDs and secret token should come from Spotify
localStorage.setItem("artist_id", "6s5ubAp65wXoTZefE01RNR");
localStorage.setItem("access_token", "BQDubqCTrmgz9OqG5HPaYTF36lH5AHYmOSJ-NOUfyNP5K_8dDQvk4HSB2XQ-malafSArfYVpC5Is1AmX0kF7N6oPkl5yLnYL2n8g6f1Ou0dz97KSSW6RjTxyWvgwKkIFu5uoDvZpm98G");
localStorage.setItem("track_id_1", "4sZGa0UXFc9Ako9Q0Sc9vk");
localStorage.setItem("track_id_2", "6Fbd6cx4TVaMm8xcsAsAfi");
localStorage.setItem("track_id_3", "3Aiv0FNUvnLphXvUFSVVD2");


async function load(){
    
    let artistID = localStorage.getItem("artist_id");
    let accessToken = localStorage.getItem("access_token");
    let trackID1 = localStorage.getItem("track_id_1");
    let trackID2 = localStorage.getItem("track_id_2");
    let trackID3 = localStorage.getItem("track_id_3");

    const response = await fetch(
        `https://api.spotify.com/v1/artists/${artistID}`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
    );

const artist = await response.json();
console.log(artist.name);
console.log(artist.images[0].url);
document.getElementById("artist-name").textContent = artist.name;
document.querySelector(".artist-image img").src = artist.images[0].url;





    
}
load();


   