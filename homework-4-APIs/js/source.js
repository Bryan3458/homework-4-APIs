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
localStorage.setItem("access_token", "BQDjc9xnSZV6VOTFZuAz38mhTRopiCF6tNvO-hphc2BR2nJ2gVkGfjm4kG9aT2ffB7CUI8Bbv7bCWoRhnXVM2ttnMiMCgz9PDtfrdUiPq8KwctaCNgZPQzIM0km8RU6c5t3WuEc38V9w");
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

const trackResponse = await fetch(
    `https://api.spotify.com/v1/tracks/${trackID1}`,
    {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
);

const track1 = await trackResponse.json();
console.log(track1);
document.querySelector(".track-title").textContent = track1.name;
document.querySelector(".track-album").textContent = track1.album.name;
document.querySelector(".track img").src = track1.album.images[0].url;
document.querySelector(".track-number").textContent = track1.track_number;
document.querySelector(".track-duration").textContent = convertMsToMinSec(track1.duration_ms);

const trackResponse2 = await fetch(
    `https://api.spotify.com/v1/tracks/${trackID2}`,
    {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
);

const track2 = await trackResponse2.json();
console.log(track2);
document.querySelectorAll(".track-title")[1].textContent = track2.name;
document.querySelectorAll(".track-album")[1].textContent = track2.album.name;
document.querySelectorAll(".track img")[1].src = track2.album.images[0].url;
document.querySelectorAll(".track-number")[1].textContent = track2.track_number;
document.querySelectorAll(".track-duration")[1].textContent = convertMsToMinSec(track2.duration_ms);

const trackResponse3 = await fetch(
    `https://api.spotify.com/v1/tracks/${trackID3}`,
    {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
);

const track3 = await trackResponse3.json();
console.log(track3);
document.querySelectorAll(".track-title")[2].textContent = track3.name;
document.querySelectorAll(".track-album")[2].textContent = track3.album.name;
document.querySelectorAll(".track img")[2].src = track3.album.images[0].url;
document.querySelectorAll(".track-number")[2].textContent = track3.track_number;
document.querySelectorAll(".track-duration")[2].textContent = convertMsToMinSec(track3.duration_ms);

}
load();