import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAddMinutes,
  buttonRemoveMinutes,
  cardForest,
  cardRain,
  cardCoffeeShop,
  cardFirePlace,
  selectedForest,
  selectedRain,
  selectedCoffeeShop,
  selectedFirePlace,
  switchTheme,
  sunBotton,
  moonBotton,
  forestVolume,
  rainVolume,
  coffeeShopVolume,
  firePlaceVolume,
} from "./elements.js"

export default function Events({ timer, controls, sounds }) {

  buttonPlay.addEventListener('click', () => {
    controls.play()
    timer.countdown();
    sounds.pressButton()
  })

  buttonPause.addEventListener('click', () => {
    controls.pause()
    timer.hold()
    sounds.pressButton()
  })

  buttonStop.addEventListener('click', () => {
    controls.pause()
    timer.reset()
    sounds.pressButton()
  })

  buttonAddMinutes.addEventListener('click', () => {
    timer.add()
    sounds.pressButton()
  })

  buttonRemoveMinutes.addEventListener('click', () => {
    timer.remove()
    sounds.pressButton()
  })

  selectedForest.addEventListener('click', () => {
    selectedForest.classList.toggle('active')
    sounds.audioPlay(sounds.forestAudio, cardForest)
    forest()

    
    selectedForest.className === 'Forest active' ? cardForest.classList.add('active') : cardForest.classList.remove('active')
  })

  forestVolume.addEventListener('input', () => {
    sounds.forestAudio.volume = forestVolume.value
  })

  selectedRain.addEventListener('click', () => {
    selectedRain.classList.toggle('active')
    sounds.audioPlay(sounds.rainingAudio, cardRain)
    rain()

    selectedRain.className === 'Rain active' ? cardRain.classList.add('active') : cardRain.classList.remove('active')
  })

  rainVolume.addEventListener('input', () => {
    sounds.rainingAudio.volume = rainVolume.value
  })

  selectedCoffeeShop.addEventListener('click', () => {
    selectedCoffeeShop.classList.toggle('active')
    sounds.audioPlay(sounds.coffeeShopAudio, cardCoffeeShop)
    coffeeShop()
    
    selectedCoffeeShop.className === 'CoffeeShop active' ? cardCoffeeShop.classList.add('active') : cardCoffeeShop.classList.remove('active')
  })

  coffeeShopVolume.addEventListener('input', () => {
    sounds.coffeeShopAudio.volume = coffeeShopVolume.value
  })

  selectedFirePlace.addEventListener('click', () => {
    selectedFirePlace.classList.toggle('active')
    sounds.audioPlay(sounds.firePlaceAudio, cardFirePlace)
    firePlace()
    selectedFirePlace.className === 'FirePlace active' ? cardFirePlace.classList.add('active') : cardFirePlace.classList.remove('active')
  })

  firePlaceVolume.addEventListener('input', () => {
    sounds.firePlaceAudio.volume = firePlaceVolume.value
  })

  switchTheme.addEventListener('change', () => {
    document.body.classList.toggle('dark')
  })

  sunBotton.addEventListener('click', () => {
    sunBotton.classList.add('hide')
    moonBotton.classList.remove('hide')
  })

  moonBotton.addEventListener('click', () => {
    sunBotton.classList.remove('hide')
    moonBotton.classList.add('hide')
  })

  function forest() {
    cardRain.classList.remove('active')
    cardCoffeeShop.classList.remove('active')
    cardFirePlace.classList.remove('active')
    selectedRain.classList.remove('active')
    selectedCoffeeShop.classList.remove('active')
    selectedFirePlace.classList.remove('active')
  }

  function rain() {
    cardForest.classList.remove('active')
    cardCoffeeShop.classList.remove('active')
    cardFirePlace.classList.remove('active')
    selectedForest.classList.remove('active')
    selectedCoffeeShop.classList.remove('active')
    selectedFirePlace.classList.remove('active')
  }

  function coffeeShop() {
    cardRain.classList.remove('active')
    cardForest.classList.remove('active')
    cardFirePlace.classList.remove('active')
    selectedRain.classList.remove('active')
    selectedForest.classList.remove('active')
    selectedFirePlace.classList.remove('active')
  }

  function firePlace() {
    cardRain.classList.remove('active')
    cardCoffeeShop.classList.remove('active')
    cardForest.classList.remove('active')
    selectedRain.classList.remove('active')
    selectedCoffeeShop.classList.remove('active')
    selectedForest.classList.remove('active')
  }

}