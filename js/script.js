const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop');
const buttonAddMinutes = document.querySelector('.increase');
const buttonRemoveMinutes = document.querySelector('.decrease');
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeeShop = document.querySelector('.coffeeShop')
const buttonFirePlace = document.querySelector('.firePlace')

const selectedForest = document.querySelector('.Forest')
const selectedRain = document.querySelector('.Rain')
const selectedCoffeeShop = document.querySelector('.CoffeeShop')
const selectedFirePlace = document.querySelector('.FirePlace')

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

const switchTheme = document.getElementById('switch-shadow')
const sunBotton = document.querySelector('.sun-icon')
const moonBotton = document.querySelector('.moon-icon')

const forestVolume = document.querySelector('.volumeForest')
const rainVolume = document.querySelector('.volumeRain')
const coffeeShopVolume = document.querySelector('.volumeCoffeShop')
const firePlaceVolume = document.querySelector('.volumeFirePlace')


// ----- AUDIO -----
const forestAudio = new Audio('/assets/sounds/Floresta.wav')
const rainingAudio = new Audio('/assets/sounds/Chuva.wav')
const coffeeShopAudio = new Audio('/assets/sounds/Cafeteria.wav')
const firePlaceAudio = new Audio('/assets/sounds/Lareira.wav')
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

forestAudio.loop = true
rainingAudio.loop = true
coffeeShopAudio.loop = true
firePlaceAudio.loop = true

// ----- FUNÇÕES -----
let actualAudio
function audioPlaying(audio) {
  const audioPlaying = actualAudio === audio

  if (audioPlaying) {
    audio.pause()
    actualAudio = false
    return true
  }

  return false
}

function pressButton() {
  buttonPressAudio.play()
}

function selectingForest() {
  buttonRain.classList.remove('active')
  buttonCoffeeShop.classList.remove('active')
  buttonFirePlace.classList.remove('active')
  selectedRain.classList.remove('active')
  selectedCoffeeShop.classList.remove('active')
  selectedFirePlace.classList.remove('active')
}

function selectingRaind() {
  buttonForest.classList.remove('active')
  buttonCoffeeShop.classList.remove('active')
  buttonFirePlace.classList.remove('active')
  selectedForest.classList.remove('active')
  selectedCoffeeShop.classList.remove('active')
  selectedFirePlace.classList.remove('active')
}

function selectingCoffeeShop() {
  buttonRain.classList.remove('active')
  buttonForest.classList.remove('active')
  buttonFirePlace.classList.remove('active')
  selectedRain.classList.remove('active')
  selectedForest.classList.remove('active')
  selectedFirePlace.classList.remove('active')
}

function selectingFirePlace() {
  buttonRain.classList.remove('active')
  buttonCoffeeShop.classList.remove('active')
  buttonForest.classList.remove('active')
  selectedRain.classList.remove('active')
  selectedCoffeeShop.classList.remove('active')
  selectedForest.classList.remove('active')
}

function resetControls() {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function addMinutes() {
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  updateTimerDisplay(String(minutes + 5), seconds)
}

function removeMinutes() {
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)
  if (minutes <= 4) {
    return
  } else {
    updateTimerDisplay(String(minutes - 5), seconds)
  }
}

function countdown () {
  timerTimeOut = setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);
    let isFinished = minutes <= 0 && seconds <= 0
    
    updateTimerDisplay(minutes, 0)

    if (isFinished) {
      resetControls()
      kitchenTimer.play()
      return
    }
    
    if (seconds <= 0) {
      seconds = 60;
      --minutes
    };
    
    updateTimerDisplay(minutes, String(seconds - 1))
    
    countdown()
  }, 1000);
};

// ----- BUTTÕES -----

buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');

  countdown();
  pressButton()
})

buttonPause.addEventListener('click', () => {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');

  clearTimeout(timerTimeOut);
  resetControls();
  pressButton()
})

buttonStop.addEventListener('click', () => {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');

  resetControls()
  resetTimer()
  pressButton()
})

buttonAddMinutes.addEventListener('click', () => {
  addMinutes()
  pressButton()
})

buttonRemoveMinutes.addEventListener('click', () => {
  removeMinutes()
  pressButton()
})

selectedForest.addEventListener('click', () => {
  selectedForest.classList.toggle('active')
  selectingForest()
  
  selectedForest.className === 'Forest active' ? buttonForest.classList.add('active') : buttonForest.classList.remove('active')

  if (audioPlaying(forestAudio)) {
    return
  }
  if (actualAudio) {
    actualAudio.pause()
  }

  forestAudio.play()
  actualAudio = forestAudio

})

forestVolume.addEventListener('input', () => {
  forestAudio.volume = forestVolume.value
})

selectedRain.addEventListener('click', () => {
  selectedRain.classList.toggle('active')
  selectingRaind()

  selectedRain.className === 'Rain active' ? buttonRain.classList.add('active') : buttonRain.classList.remove('active')

  if (audioPlaying(rainingAudio)) {
    return
  }
  if (actualAudio) {
    actualAudio.pause()
  }

  rainingAudio.play()
  actualAudio = rainingAudio
})

rainVolume.addEventListener('input', () => {
  rainingAudio.volume = rainVolume.value
})

selectedCoffeeShop.addEventListener('click', () => {
  selectedCoffeeShop.classList.toggle('active')
  selectingCoffeeShop()

  selectedCoffeeShop.className === 'CoffeeShop active' ? buttonCoffeeShop.classList.add('active') : buttonCoffeeShop.classList.remove('active')

  if (audioPlaying(coffeeShopAudio)) {
    return
  }
  if (actualAudio) {
    actualAudio.pause()
  }

  coffeeShopAudio.play()
  actualAudio = coffeeShopAudio
})

coffeeShopVolume.addEventListener('input', () => {
  coffeeShopAudio.volume = coffeeShopVolume.value
})

selectedFirePlace.addEventListener('click', () => {
  selectedFirePlace.classList.toggle('active')
  // buttonFirePlace.className === 'firePlace active' ? sounds.cardFirePlace.play() : sounds.cardFirePlace.pause()
  selectingFirePlace()

  selectedFirePlace.className === 'FirePlace active' ? buttonFirePlace.classList.add('active') : buttonFirePlace.classList.remove('active')

  if (audioPlaying(firePlaceAudio)) {
    return
  }
  if (actualAudio) {
    actualAudio.pause()
  }

  firePlaceAudio.play()
  actualAudio = firePlaceAudio
})

firePlaceVolume.addEventListener('input', () => {
  firePlaceAudio.volume = firePlaceVolume.value
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