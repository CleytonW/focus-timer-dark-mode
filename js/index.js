import Controls from "./controls.js";
import Timer from "./timer.js";
import Sounds from "./sounds.js";
import Events from "./events.js";
import {
  buttonPlay,
  buttonPause,
  secondsDisplay,
  minutesDisplay,
} from "./elements.js";

const controls = Controls ({
  buttonPlay,
  buttonPause,
})

const timer = Timer ({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sounds = Sounds ()

Events ({ timer, sounds, controls })