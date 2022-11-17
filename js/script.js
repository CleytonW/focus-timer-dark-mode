const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop');
const buttonAddMinutes = document.querySelector('.increase');
const buttonRemoveMinutes = document.querySelector('.decrease');
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeeShop = document.querySelector('.coffeeShop')
const buttonFirePlace = document.querySelector('.firePlace')
// const musicActivator = document.querySelectorAll('.card');

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

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

buttonForest.addEventListener('click', function () {
  buttonForest.classList.toggle('active')
  buttonRain.classList.remove('active')
  buttonCoffeeShop.classList.remove('active')
  buttonFirePlace.classList.remove('active')

  if (audioPlaying(forestAudio)) {
    return
  }
  if (actualAudio) {
    actualAudio.pause()
  }

  forestAudio.play()
  actualAudio = forestAudio
})

buttonRain.addEventListener('click', function () {
  buttonRain.classList.toggle('active')
  buttonForest.classList.remove('active')
  buttonCoffeeShop.classList.remove('active')
  buttonFirePlace.classList.remove('active')

  if (audioPlaying(rainingAudio)) {
    return
  }
  if (actualAudio) {
    actualAudio.pause()
  }

  rainingAudio.play()
  actualAudio = rainingAudio
})

buttonCoffeeShop.addEventListener('click', function () {
  buttonCoffeeShop.classList.toggle('active')
  buttonRain.classList.remove('active')
  buttonForest.classList.remove('active')
  buttonFirePlace.classList.remove('active')

  if (audioPlaying(coffeeShopAudio)) {
    return
  }
  if (actualAudio) {
    actualAudio.pause()
  }

  coffeeShopAudio.play()
  actualAudio = coffeeShopAudio
})

buttonFirePlace.addEventListener('click', function () {
  buttonFirePlace.classList.toggle('active')
  buttonRain.classList.remove('active')
  buttonCoffeeShop.classList.remove('active')
  buttonForest.classList.remove('active')

  if (audioPlaying(firePlaceAudio)) {
    return
  }
  if (actualAudio) {
    actualAudio.pause()
  }

  firePlaceAudio.play()
  actualAudio = firePlaceAudio
})