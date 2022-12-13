export default function Controls({
  buttonPlay,
  buttonPause,
}) {

  function play() {
    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');
  }

  function pause() {
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');
  }

  function reset() {
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');
  }

  function toggle(card){
    card.classList.toggle('active')
  }

  return {
    play,
    pause,
    reset,
    toggle
  }
}
