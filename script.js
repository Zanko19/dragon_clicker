let eggs = 90;
let eggPerSecond = 1;
let eggPerClick = 1;

let boutiqueList = [
  {
    name: "Fleche",
    description: "Augmente le nombre d'oeufs par clic",
    price: 30,
    src: "assets/farming_icon/arrow.jpg",
    effect: function () {
      eggPerClick += 5;
    },
  },
  {
    name: "Vitamines",
    description: "Augmente le nombre d'oeufs par seconde (5)",
    price: 60,
    src: "assets/farming_icon/vitamin.png",
    effect: function () {
      eggPerSecond = 5;
    },
  },
  {
    name: "Forgeron",
    description: "+2% de production oeuf par seconde",
    price: 100,
    src: "assets/farming_icon/forge.jpg",
    effect: function () {
      eggPerSecond += 1;
      // eggPerSecond += (eggPerSecond * 0.02);
    },
  },
];

/**
 * fonction qui met a jour l'image de l'oeuf de dragon pour chaque palier d'oeuf debloqué
 *
 */
function updateEggImage() {
  let eggImg = document.getElementById("egg-image");
  switch (true) {
    case eggs < 100:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_1.png";
      break;
    case eggs < 200:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_2.png";
      break;
    case eggs < 300:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_3.png";
      break;
    case eggs < 400:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_4.png";
      break;
  }
}

function addEggs(nb) {
  eggs += nb;
  displayEggs();
  updateEggImage();
}

function addEggPerSecond() {
  setInterval(addEggs(eggPerSecond), 1000);
}

function startAutoClick() {
  const autoclickInterval = 1000;

  const autoclickIntervalId = setInterval(() => {
    addEggPerSecond(eggPerSecond);
  }, autoclickInterval);
}

function updatePageTitle() {
  document.title = "Eggs: " + eggs;
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

function displayEggs() {
  const eggCounter = document.getElementById("egg-count");
  eggCounter.innerHTML = "Eggs : " + eggs;
}

function RandomEggBonus() {
  // Bonus aléatoire entre 50 000 et 200 000 œufs
  const bonusEggs = Math.floor(Math.random() * 150001) + 50000;
  eggs = eggs + bonusEggs;

  // Bonus aléatoire entre 2 et 5 minutes
  const nextBonusTime = Math.floor(Math.random() * 180000) + 120000;
  setTimeout(function () {
    // Après un délai entre 2 et 5 minutes, on ajoute le bonus ajouté (entre 10 et 30seconde)
    const addBonusTime = Math.floor(Math.random() * 20000) + 10000;

    setTimeout(function () {
      // Additionne le montant du bonus du score actuel
      eggs = eggs + bonusEggs;
    }, addBonusTime);
  }, nextBonusTime);
}

document.addEventListener("DOMContentLoaded", function () {
  const eggImage = document.getElementById("egg-image");

  // effet de bouton sur l'oeuf
  eggImage.addEventListener("mousedown", () => {
    eggImage.style.transform = "scale(0.95)";
  });
  eggImage.addEventListener("mouseup", () => {
    eggImage.style.transform = "scale(1)";
  });

  loadEggs();

  // RandomEggBonus();
  // addEggPerSecond();

  eggImage.addEventListener("click", function () {
    console.log("click : " + eggs);
    addEggs(eggPerClick);
  });
});


