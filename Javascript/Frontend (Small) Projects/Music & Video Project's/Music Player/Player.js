const musicContainer = document.getElementById('music-container');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// ! Song Titles :->

const songs = ['Myself','Senorita','Astronomia','MoreThanYouKnow','IWarnedMyself'];

// ! Keep Track of Song :->

let songIndex = 2;

// ! Initially Load Song Details into DOM :->

loadSong(songs[songIndex]);

// ! Update Song Details :->

function loadSong(song)
{
  title.innerText = song;
  audio.src = `Song/${song}.mp3`;
  cover.src = `Images/${song}.jpg`;
}

// ! Play Song :->

function playSong()
{
  musicContainer.classList.add('play');

  playButton.querySelector('i.fas').classList.remove('fa-play');
  playButton.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// ! Pause Song :->

function pauseSong()
{
  musicContainer.classList.remove('play');
  playButton.querySelector('i.fas').classList.add('fa-play');
  playButton.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// ! Previous Song :->

function prevSong()
{
  songIndex--;

  if (songIndex < 0) 
    songIndex = songs.length - 1;

  loadSong(songs[songIndex]);

  playSong();
}

// ! Next Song :->

function nextSong()
{
  songIndex++;

  if (songIndex > songs.length - 1) 
    songIndex = 0;

  loadSong(songs[songIndex]);

  playSong();
}

// ! Update Progress Bar :->

function updateProgress(event)
{
  const { duration, currentTime } = event.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// ! Set Progress Bar :->

function setProgress(event)
{
  const width = this.clientWidth;
  const clickX = event.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

// ! Event Listeners :->

playButton.addEventListener('click', () =>
{
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) 
    pauseSong();
  else 
    playSong();
});

// ! Change Song :->

prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);

// ! Time/Song Update :->

audio.addEventListener('timeupdate', updateProgress);

// ! Click on Progress Bar :->

progressContainer.addEventListener('click', setProgress);

// ! Song Ends :->

audio.addEventListener('ended', nextSong);
