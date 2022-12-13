import Sounds from "./sounds.js";
let { alertEnd } = Sounds()

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function countdown () {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0
      
      updateDisplay(minutes, 0)

      if (isFinished) {
        alertEnd()
        reset()
        return
      }
      
      if (seconds <= 0) {
        seconds = 60;
        --minutes
      };
      
      updateDisplay(minutes, String(seconds - 1))
      
      countdown()
    }, 1000);
  };

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function reset() {
    updateDisplay(minutes, 0)
    hold()
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }
 
  function add() {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    updateDisplay(String(minutes + 5), seconds)
  }

  function remove() {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    if (minutes <= 4) {
      return
    } else {
      updateDisplay(String(minutes - 5), seconds)
    }
  }

  return {
    countdown,
    reset,
    updateDisplay,
    hold,
    add, 
    remove,
  }

}