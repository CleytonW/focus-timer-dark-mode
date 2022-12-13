const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop');
const buttonAddMinutes = document.querySelector('.increase');
const buttonRemoveMinutes = document.querySelector('.decrease');
const cardForest = document.querySelector('.forest')
const cardRain = document.querySelector('.rain')
const cardCoffeeShop = document.querySelector('.coffeeShop')
const cardFirePlace = document.querySelector('.firePlace')

const selectedForest = document.querySelector('.Forest')
const selectedRain = document.querySelector('.Rain')
const selectedCoffeeShop = document.querySelector('.CoffeeShop')
const selectedFirePlace = document.querySelector('.FirePlace')

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');


const switchTheme = document.getElementById('switch-shadow')
const sunBotton = document.querySelector('.sun-icon')
const moonBotton = document.querySelector('.moon-icon')

const forestVolume = document.querySelector('.volumeForest')
const rainVolume = document.querySelector('.volumeRain')
const coffeeShopVolume = document.querySelector('.volumeCoffeShop')
const firePlaceVolume = document.querySelector('.volumeFirePlace')

export {
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
  minutesDisplay,
  secondsDisplay,
  switchTheme,
  sunBotton,
  moonBotton,
  forestVolume,
  rainVolume,
  coffeeShopVolume,
  firePlaceVolume,
}