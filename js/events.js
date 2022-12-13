import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAddMinutes,
  buttonRemoveMinutes,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFirePlace,
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
    sounds.audioPlay(sounds.forestAudio, buttonForest)
    forest()

    
    selectedForest.className === 'Forest active' ? buttonForest.classList.add('active') : buttonForest.classList.remove('active')
  })

  forestVolume.addEventListener('input', () => {
    sounds.forestAudio.volume = forestVolume.value
  })

  selectedRain.addEventListener('click', () => {
    selectedRain.classList.toggle('active')
    sounds.audioPlay(sounds.rainingAudio, buttonRain)
    rain()

    selectedRain.className === 'Rain active' ? buttonRain.classList.add('active') : buttonRain.classList.remove('active')
  })

  rainVolume.addEventListener('input', () => {
    sounds.rainingAudio.volume = rainVolume.value
  })

  selectedCoffeeShop.addEventListener('click', () => {
    selectedCoffeeShop.classList.toggle('active')
    sounds.audioPlay(sounds.coffeeShopAudio, buttonCoffeeShop)
    coffeeShop()
    
    selectedCoffeeShop.className === 'CoffeeShop active' ? buttonCoffeeShop.classList.add('active') : buttonCoffeeShop.classList.remove('active')
  })

  coffeeShopVolume.addEventListener('input', () => {
    sounds.coffeeShopAudio.volume = coffeeShopVolume.value
  })

  selectedFirePlace.addEventListener('click', () => {
    selectedFirePlace.classList.toggle('active')
    sounds.audioPlay(sounds.firePlaceAudio, buttonFirePlace)
    firePlace()
    
    selectedFirePlace.className === 'FirePlace active' ? buttonFirePlace.classList.add('active') : buttonFirePlace.classList.remove('active')
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
    buttonRain.classList.remove('active')
    buttonCoffeeShop.classList.remove('active')
    buttonFirePlace.classList.remove('active')
    selectedRain.classList.remove('active')
    selectedCoffeeShop.classList.remove('active')
    selectedFirePlace.classList.remove('active')
  }

  function rain() {
    buttonForest.classList.remove('active')
    buttonCoffeeShop.classList.remove('active')
    buttonFirePlace.classList.remove('active')
    selectedForest.classList.remove('active')
    selectedCoffeeShop.classList.remove('active')
    selectedFirePlace.classList.remove('active')
  }

  function coffeeShop() {
    buttonRain.classList.remove('active')
    buttonForest.classList.remove('active')
    buttonFirePlace.classList.remove('active')
    selectedRain.classList.remove('active')
    selectedForest.classList.remove('active')
    selectedFirePlace.classList.remove('active')
  }

  function firePlace() {
    buttonRain.classList.remove('active')
    buttonCoffeeShop.classList.remove('active')
    buttonForest.classList.remove('active')
    selectedRain.classList.remove('active')
    selectedCoffeeShop.classList.remove('active')
    selectedForest.classList.remove('active')
  }

}