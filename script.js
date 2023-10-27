"use strict";
let eggs = 0;
let eggPerSecond = 0;
let eggPerClick = 1;

let farmingList = [
  {
    name: "Fleche",
    description: "Augmente le nombre d'oeufs par clic",
    price: 30,
    src: "assets/farming_icon/arrow.jpg",
    effect: function () {
      eggs = eggs - this.price;
      eggPerClick += 5;
    },
  },
  {
    name: "Forgeron",
    description: "+2% de production oeuf par seconde",
    price: 60,
    src: "assets/farming_icon/forge.jpg",
    effect: function () {
      eggs = eggs - this.price;
      eggPerSecond += 5;
    },
  },
  {
    name: "Vitamines",
    description: "Augmente le nombre d'oeufs par seconde (5)",
    price: 60,
    src: "assets/farming_icon/vitamin.png",
    effect: function () {
      eggs = eggs - this.price;
      eggPerSecond += 5;
    },
  },
];

let bonusList = [
  {
    name: "Dragon Ball",
    description: "multiply your egg per second by 2",
    price: 100,
    src: "assets/bonus_icon/dragon-ball.png",
    effect: function () {
      eggs = eggs - this.price;
      eggPerSecond *= 2;
    },
  },
  {
    name: "Dragon Trainer",
    description: "multiply your egg per second by 5",
    price: 150,
    src: "assets/bonus_icon/dragon_trainer.jpg",
    effect: function () {
      eggs = eggs - this.price;
      eggPerSecond *= 5;
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
      eggImg.src = "assets/dragon_egg/oeuf_dragon_5.png";
      break;
    case eggs < 500:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_4.png";
      break;
    case eggs < 1000:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_6.png";
      break;
    case eggs < 2000:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_7.png";
      break;
    case eggs < 5000:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_9.png";
      break;
    case eggs < 8000:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_10.png";
      break;
    case eggs < 10000:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_8.png";
      break;
    case eggs < 15000:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_3.png";
      break;
    case eggs < 20000:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_12.png";
      break;
    case eggs < 25000:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_2.png";
      break;
    case eggs < 30000:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_1.png";
      break;
    case eggs < 50000:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_11.png";
      break;
  }
}

function addEggs(nb) {
  eggs += nb;
  displayEggs();
  updateEggImage();
  updatePageTitle();
  updateButtonsState();
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
  localStorage.setItem("EggPerSecond", eggPerSecond);
  localStorage.setItem("EggPerClick", eggPerClick);
}

function loadEggs() {
  const savedEggs = localStorage.getItem("eggs");
  const savedEggPerSecond = localStorage.getItem("EggPerSecond");
  const savedEggPerClick = localStorage.getItem("EggPerClick");
  if (savedEggs !== null) {
    eggs = parseInt(savedEggs);
  }
}

function displayEggs() {
  const eggCounter = document.getElementById("egg-count");
  const eggPerSecCounter = document.getElementById("eggPerSec-count");

  eggCounter.innerHTML = "Eggs : " + eggs;
  eggPerSecCounter.innerHTML = "Eggs/second: " + eggPerSecond;
}

function randomEggBonus() {
  setInterval(function () {
    const bonusEggs = Math.floor(Math.random() * 901) + 100; // Génère un nombre entre 100 et 1000
    eggs += bonusEggs;

    // Affichage de la notification
    const notification = document.getElementById("egg-notification");
    const bonusEggsElement = document.getElementById("bonus-eggs");
    bonusEggsElement.textContent = bonusEggs;
    notification.style.display = "block";

    // Masquage de la notification après quelques secondes (par exemple, 5 secondes)
    setTimeout(function () {
      notification.style.display = "none";
    }, 2000);
  }, 120000); // 120000 millisecondes équivalent à 2 minutes
}

function updateButtonsState() {
  const farmingButtons = Array.from(
    document.querySelectorAll(".farming_button")
  );
  const bonusButtons = Array.from(document.querySelectorAll(".bonus_button"));

  function updateButtonState(button, price) {
    if (eggs >= price) {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled", "disabled");
    }
  }

  farmingButtons.forEach((button) => {
    const price = parseInt(button.dataset.price);
    updateButtonState(button, price);
  });

  bonusButtons.forEach((button) => {
    const price = parseInt(button.dataset.price);
    updateButtonState(button, price);
  });
}

function generateCards() {
  // Parcourez la liste farmingList
  farmingList.forEach((cardData) => {
    // Récupérez la section "farming" où vous souhaitez ajouter les cartes
    const farmingSection = document.querySelector(".farming");

    // Récupérez le modèle de carte
    const cardTemplate = document.getElementById("card-template");
    // Clonez le modèle
    const cardClone = document.importNode(cardTemplate.content, true);
    // Récupérez les éléments de la carte clonée
    const card = cardClone.querySelector(".card");
    const image = card.querySelector(".farming_img");
    const title = card.querySelector(".farming_title");
    const description = card.querySelector(".farming_desc");
    const button = card.querySelector(".farming_button");

    // Remplissez les données de la carte avec les données de farmingList
    image.src = cardData.src;
    title.textContent = cardData.name; // Utilisez le nom de l'élément comme titre
    description.textContent = cardData.description;
    button.textContent = `Price: ${cardData.price}`;

    button.dataset.price = cardData.price;

    // Vérifiez si le bouton doit être activé ou désactivé
    if (eggs >= cardData.price) {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled", "disabled");
    }

    // Ajoutez un gestionnaire de clic au bouton
    button.addEventListener("click", () => {
      // Vérifiez à nouveau si le bouton est activé avant d'appeler la fonction effect
      if (!button.hasAttribute("disabled")) {
        // Appel de la fonction effect
        cardData.effect();
      }
    });

    // Ajoutez la carte clonée à la section "farming"
    farmingSection.appendChild(cardClone);
  });

  bonusList.forEach((cardData) => {
    // Récupérez la section "farming" où vous souhaitez ajouter les cartes
    const bonusSection = document.querySelector(".bonus");

    // Récupérez le modèle de carte
    const bonusCardTemplate = document.getElementById("bonus-card-template");
    // Clonez le modèle
    const cardClone = document.importNode(bonusCardTemplate.content, true);
    // Récupérez les éléments de la carte clonée
    const card = cardClone.querySelector(".card");
    const image = card.querySelector(".bonus_img");
    const title = card.querySelector(".bonus_title");
    const description = card.querySelector(".bonus_desc");
    const button = card.querySelector(".bonus_button");

    // Remplissez les données de la carte avec les données de farmingList
    image.src = cardData.src;
    title.textContent = cardData.name; // Utilisez le nom de l'élément comme titre
    description.textContent = cardData.description;
    button.textContent = `Price: ${cardData.price}`;

    button.dataset.price = cardData.price;

    // Vérifiez si le bouton doit être activé ou désactivé
    if (eggs >= cardData.price) {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled", "disabled");
    }

    // Ajoutez un gestionnaire de clic au bouton
    button.addEventListener("click", () => {
      // Vérifiez à nouveau si le bouton est activé avant d'appeler la fonction effect
      if (!button.hasAttribute("disabled")) {
        // Appel de la fonction effect
        cardData.effect();
      }
    });

    // Ajoutez la carte clonée à la section "farming"
    bonusSection.appendChild(cardClone);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  generateCards();
  startAutoClick();

  const eggImage = document.getElementById("egg-image");

  // effet de bouton sur l'oeuf
  eggImage.addEventListener("mousedown", () => {
    eggImage.style.transform = "scale(0.95)";
  });
  eggImage.addEventListener("mouseup", () => {
    eggImage.style.transform = "scale(1)";
  });

  loadEggs();

  randomEggBonus();
  // addEggPerSecond();

  eggImage.addEventListener("click", function () {
    console.log("click : " + eggs);
    addEggs(eggPerClick);
  });
});
