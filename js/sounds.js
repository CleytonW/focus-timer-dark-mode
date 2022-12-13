export default function Sounds() {

  const forestAudio = new Audio('/assets/sounds/Floresta.wav')
  const rainingAudio = new Audio('/assets/sounds/Chuva.wav')
  const coffeeShopAudio = new Audio('/assets/sounds/Cafeteria.wav')
  const firePlaceAudio = new Audio('/assets/sounds/Lareira.wav')
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  
  
  function alertEnd() {
    kitchenTimer.play()
  }
  
  function pressButton() {
    buttonPressAudio.play()
  }
  
  function audioPlay(sound, card) {
    sound.loop = true
    let Play = card.classList.contains('active')
    Play === false ? sound.play() : sound.pause()
  }

  return {
    pressButton,
    alertEnd,
    audioPlay,
    forestAudio,
    rainingAudio,
    coffeeShopAudio,
    firePlaceAudio,
    buttonPressAudio
  }
}