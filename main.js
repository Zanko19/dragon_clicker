import "./style.scss";
import "./script.js";

document.addEventListener("DOMContentLoaded", function () {
  const eggElement = document.getElementById("egg-container");
  let eggCount = 0;
  const clicsRequis = 30;

  function incrementEggCount() {
    eggCount++;
    updateEggCounter();

    if (eggCount === clicsRequis) {
      startAutoClick();
    }
  }

  function updateEggCounter() {
    const eggCounterElement = document.getElementById("egg-count");
    eggCounterElement.textContent = `Dragon Egg : ${eggCount}`;
  }

  function startAutoClick() {
    const autoclickInterval = 1000; // Par exemple, un clic toutes les secondes

    const autoclickIntervalId = setInterval(() => {
      incrementEggCount();
    }, autoclickInterval);
  }

  eggElement.addEventListener("click", incrementEggCount);
});
