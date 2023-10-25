// Score d'œufs actuel
let eggs = 0;

// Mettre à jour l'affichage du nombre d'œufs
function updateEggs() {
  const eggCountElement = document.getElementById("egg-count");
  eggCountElement.textContent = eggs;
}
updateEggs();


function RandomEggBonus() {
  // Bonus aléatoire entre 50 000 et 200 000 œufs
  const bonusEggs = Math.floor(Math.random() * 150001) + 50000;
  eggs = eggs + bonusEggs;

  updateEggs();

  // Bonus aléatoire entre 2 et 5 minutes
  const nextBonusTime = Math.floor(Math.random() * 180000) + 120000; 
  setTimeout(function() {
    // Après un délai entre 2 et 5 minutes, on ajoute le bonus ajouté (entre 10 et 30seconde)
    const addBonusTime = Math.floor(Math.random() * 20000) + 10000; 
    
    setTimeout(function() {
      // Additionne le montant du bonus du score actuel
      eggs = eggs + bonusEggs;
      
      updateEggs();
    }, addBonusTime);
  }, nextBonusTime);
}

RandomEggBonus();



