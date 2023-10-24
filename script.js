// Score d'œufs actuel
let eggs = 0;

function addRandomEggBonus() {

  // Bonus aléatoire entre 50 000 et 200 000 œufs
  const bonusEgs = Math.floor(Math.random() * 150001) + 50000;

  eggs = eggs + bonusEgs;

  updateEggCount();

  // Bonus aléatoire entre 2 et 5 minutes
  const nextBonusTime = Math.floor(Math.random() * 180000) + 120000; 

  setTimeout(function() {

    // Après un délai entre 2 et 5 minutes, on réduit le bonus ajouté 
    const reductionTime = Math.floor(Math.random() * 20000) + 10000; 
    
    setTimeout(function() {
      // Soustraire le montant du bonus du score actuel
      eggs = eggs - bonusEgs;
      
      updateEggCount();
    }, reductionTime);
  }, nextBonusTime);
}

// Mettre à jour l'affichage du nombre d'œufs
function updateEggCount() {
  const eggCountElement = document.getElementById("egg-count");
  eggCountElement.textContent = eggs;
}


addRandomEggBonus();



