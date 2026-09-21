const audio = document.querySelector('audio');
const help = document.querySelector('#music-help');
const welcome = document.querySelector('.welcome');
const flowers = document.querySelector('#flowers-content');
const openFlowers = document.querySelector('.open-button');
const playButton = document.querySelector('#play-music');

function playMusic() {
  audio.play().catch(() => {
    help.textContent = audio.error
      ? 'No se pudo cargar la canción. Comprobá que assets/floricienta.mp3 esté incluido en el sitio.'
      : 'Tocá Escuchar música para iniciar la canción.';
  });
}

if (welcome && flowers && openFlowers) {
  flowers.hidden = true;
  openFlowers.addEventListener('click', (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    welcome.hidden = true;
    flowers.hidden = false;
    playMusic();
    document.querySelector('#garden-title').setAttribute('tabindex', '-1');
    document.querySelector('#garden-title').focus({ preventScroll: true });
    window.scrollTo(0, 0);
  });
}

playButton.hidden = false;
playButton.addEventListener('click', () => {
  if (audio.paused) playMusic();
  else audio.pause();
});
audio.addEventListener('playing', () => {
  playButton.textContent = 'Pausar música';
  help.textContent = 'Sonando para vos ♡';
});
audio.addEventListener('pause', () => {
  playButton.textContent = 'Escuchar música';
  help.textContent = 'La música está pausada.';
});
audio.addEventListener('error', () => {
  help.textContent = 'No se pudo cargar la canción. Comprobá que assets/floricienta.mp3 esté incluido en el sitio.';
});
