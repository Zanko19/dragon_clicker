import "./style.scss";
import "./script.js";

document.addEventListener("DOMContentLoaded", function () {
  const eggElement = document.getElementById("egg-container");
  let eggs = 0;
  const clicsRequis = 1;

  function incrementEggCount() {
    eggs++;
    updateEggCounter();

    if (eggs === clicsRequis) {
      startAutoClick();
    }
  }

  function updateEggCounter() {
    const eggCounterElement = document.getElementById("egg-count");
    eggCounterElement.textContent = `Dragon Egg : ${eggs}`;
  }

  function startAutoClick() {
    const autoclickInterval = 1000;

    const autoclickIntervalId = setInterval(() => {
      incrementEggCount();
    }, autoclickInterval);
  }

  eggElement.addEventListener("click", incrementEggCount);
});
