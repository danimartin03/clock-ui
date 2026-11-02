import Alarm from "./Alarm.js";
import Clock from "./Clock.js";
import Stopwatch from "./Stopwatch.js";
import Timer from "./Timer.js";

customElements.define("x-alarm", Alarm);
customElements.define("x-clock", Clock);
customElements.define("x-stopwatch", Stopwatch);
customElements.define("x-timer", Timer);

// Pestañas
function updateTabs() {
  if (!location.hash) {
    location.replace("#clock");
  }

  document.querySelectorAll("nav a").forEach((link) => {
    link.classList.toggle("active", link.hash === location.hash);
  });
}

window.addEventListener("hashchange", updateTabs);
updateTabs();

// Sonido
import alarmUrl from "./assets/alarm.mp3";

const sound = new Audio(alarmUrl);

document.addEventListener("ring", (event) => {
  if (!event.detail.sounded) {
    event.detail.sounded = true;
    sound.play();
  }
});

document.addEventListener("stop", () => sound.play());
