let audioElem = document.querySelector("audio");

let musicsSrc = ["media/music.mp3", "media/stranger.mp3", "media/Massive.mp3"];

let audioIndex = 0;

function previousMusicHandler() {
  audioIndex--;

  if (audioIndex < 0) {
    audioIndex = 2;
  }

  audioElem.setAttribute("src", musicsSrc[audioIndex]);
  console.log(musicsSrc[audioIndex]);
  playHandler();
}

function playHandler() {
  audioElem.play();
  console.log("Music Played");

  setInterval(function () {
    console.log(audioElem.currentTime);
  }, 1000);
}

function pauseHandler() {
  audioElem.pause();
  console.log("Music Paused");
}

function nextMusicHandler() {
  audioIndex++;

  if (audioIndex > musicsSrc.length - 1) {
    audioIndex = 0;
  }

  audioElem.setAttribute("src", musicsSrc[audioIndex]);
  console.log(musicsSrc[audioIndex]);
  playHandler();
}

function musicSpeedHandler() {
  audioElem.playbackRate = 2;
  console.log("Speed 2X");
}

function timeMinuMusicHandler() {
  audioElem.currentTime -= 5;
}

function timePlusMusicHandler() {
  audioElem.currentTime += 5;
}
