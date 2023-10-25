document.addEventListener("DOMContentLoaded", function () {
  const eggElement = document.getElementById("egg-container");
  let eggs = 0;
  const clicsRequis = 1;

  function incrementEggCount() {
    eggs++;
    updateEggCounter();
    updateEggImage();

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

  /**
   * function update eggs in pageTitle
   */
  setInterval(updatePageTitle, 1000);
  function updatePageTitle() {
    document.title = "Eggs: " + eggs;
  }

  /**
   * fonction qui met a jour l'image de l'oeuf de dragon pour chaque palier d'oeuf debloqué
   *
   */
  function updateEggImage() {
    const eggImage = document.getElementById("egg-image");

    let imageSrc;

    switch (true) {
      case eggs < 100:
        imageSrc = "assets/dragon_egg/oeuf_dragon_2.png";
        break;
      case eggs < 10000:
        imageSrc = "assets/dragon_egg/oeuf_dragon_3.png";
        break;
      case eggs < 15000:
        imageSrc = "assets/dragon_egg/oeuf_dragon_4.png";
        break;
      case eggs < 20000:
        imageSrc = "assets/dragon_egg/oeuf_dragon_5.png";
        break;
      case eggs < 50000:
        imageSrc = "assets/dragon_egg/oeuf_dragon_6.png";
        break;
      case eggs < 100000:
        imageSrc = "assets/dragon_egg/oeuf_dragon_7.png";
        break;
      case eggs < 150000:
        imageSrc = "assets/dragon_egg/oeuf_dragon_8.png";
        break;
      case eggs < 200000:
        imageSrc = "assets/dragon_egg/oeuf_dragon_9.png";
        break;
      case eggs < 1000000:
        imageSrc = "assets/dragon_egg/oeuf_dragon_10.png";
        break;
      case eggs < 1500000:
        imageSrc = "assets/dragon_egg/oeuf_dragon_11.png";
        break;
      case eggs < 5000000:
        imageSrc = "assets/dragon_egg/oeuf_dragon_12.png";
        break;
    }
    eggImage.src = imageSrc;
  }

  /**
   * function localStorage
   */
  function saveEggs() {
    localStorage.setItem("eggs", eggs);
  }

  function loadEggs() {
    const savedEggs = localStorage.getItem("eggs");
    if (savedEggs !== null) {
      eggs = parseInt(savedEggs);
    }
  }

  loadEggs();

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
    setTimeout(function () {
      // Après un délai entre 2 et 5 minutes, on ajoute le bonus ajouté (entre 10 et 30seconde)
      const addBonusTime = Math.floor(Math.random() * 20000) + 10000;

      setTimeout(function () {
        // Additionne le montant du bonus du score actuel
        eggs = eggs + bonusEggs;

        updateEggs();
      }, addBonusTime);
    }, nextBonusTime);
  }

  RandomEggBonus();
});
