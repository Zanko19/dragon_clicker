import "./style.scss";
import "./script.js";
// Attendez que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez l'élément d'œuf
    const eggElement = document.getElementById("egg-container");
  
    // Initialisez le compteur d'œufs
    let eggs = 0;
  
    // Fonction pour incrémenter le compteur d'œufs
    function incrementEggCount() {
      eggs++;
      updateEggCounter();
    }
  
    // Fonction pour mettre à jour le compteur d'œufs sur la page
    function updateEggCounter() {
      const eggCounterElement = document.getElementById("egg-count");
      eggCounterElement.textContent = `Dragon Egg : ${eggs}`;
    }
  
    // Écoutez le clic sur l'œuf
    eggElement.addEventListener("click", incrementEggCount);
  });
  