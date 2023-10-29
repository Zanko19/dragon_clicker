let eggs = 0;
let eggPerSecond = 0;
let eggPerClick = 1;

let farmingList = [
  {
    name: "Fleche",
    description: "Augmente le nombre d'oeufs par clic (2)",
    price: 50,
    level: 0,
    src: "assets/farming_icon/arrow.jpg",
    effect: function () {
      eggs = eggs - this.price;
      eggPerClick += 2;
      this.level++;
      document.getElementById("arrow-nb").textContent = this.level;
    },
  },

  {
    name: "Vitamines",
    description: "Augmente le nombre d'oeufs par seconde (2)",
    price: 100,
    level: 0,
    src: "assets/farming_icon/vitamin.png",
    effect: function () {
      eggs = eggs - this.price;
      eggPerSecond += 2;
      this.level++;
      document.getElementById("vit-nb").textContent = this.level;
    },
  },
  {
    name: "Forgeron",
    description: "multiplie les oeufs par seconde par 1.5",
    price: 200,
    level: 0,
    src: "assets/farming_icon/forge.jpg",
    effect: function () {
      eggs = eggs - this.price;
      eggPerSecond = eggPerSecond + eggPerSecond * 1.5;
      this.level++;
      document.getElementById("forge-nb").textContent = this.level;
    },
  },
];

let bonusList = [
  {
    name: "Dragon Ball",
    description: "multiply your egg per second by 1.5",
    price: 500,
    level: 0,
    src: "assets/bonus_icon/dragon-ball.png",
    effect: function () {
      eggs = eggs - this.price;
      eggPerSecond *= 1.5;
      this.level++;
      document.getElementById("dball-number").textContent = this.level;
    },
  },
  {
    name: "Dragon Trainer",
    description: "multiply your egg per second by 5",
    price: 1000,
    level: 0,
    src: "assets/bonus_icon/dragon_trainer.jpg",
    effect: function () {
      eggs = eggs - this.price;
      eggPerSecond *= 2;
      this.level++;
      document.getElementById("trainer-number").textContent = this.level;
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
    case eggs < 0:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_1.png";
      break;
    case eggs < 100:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_5.png";
      break;
    case eggs < 5000:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_4.png";
      break;
    case eggs < 10000:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_6.png";
      break;
    case eggs < 20000:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_7.png";
      break;
    case eggs < 50000:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_9.png";
      break;
    case eggs < 80000:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_10.png";
      break;
    case eggs < 100000:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_8.png";
      break;
    case eggs < 150000:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_3.png";
      break;
    case eggs < 200000:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_12.png";
      break;
    case eggs < 250000:
      eggImg.src = "assets/dragon_egg/oeuf_dragon_2.png";
      break;
    case eggs > 500000:
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
  saveEggs();
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
  localStorage.setItem("eggPerSecond", eggPerSecond);
  localStorage.setItem("eggPerClick", eggPerClick);
  // Ajoutez ces lignes pour sauvegarder le nombre de "Own Bonus"
  localStorage.setItem(
    "dragonBallCount",
    document.getElementById("dball-number").textContent
  );
  localStorage.setItem(
    "trainerCount",
    document.getElementById("trainer-number").textContent
  );
  localStorage.setItem(
    "arrowCount",
    document.getElementById("arrow-nb").textContent
  );
  localStorage.setItem(
    "forgeCount",
    document.getElementById("forge-nb").textContent
  );
  localStorage.setItem(
    "vitCount",
    document.getElementById("vit-nb").textContent
  );
}

function loadEggs() {
  const savedEggs = localStorage.getItem("eggs");
  const savedEggPerSecond = localStorage.getItem("eggPerSecond");
  const savedEggPerClick = localStorage.getItem("eggPerClick");
  // Ajoutez ces lignes pour charger le nombre de "Own Bonus"
  const savedDragonBallCount = localStorage.getItem("dragonBallCount");
  const savedTrainerCount = localStorage.getItem("trainerCount");
  const savedArrowCount = localStorage.getItem("arrowCount");
  const savedForgeCount = localStorage.getItem("forgeCount");
  const savedVitCount = localStorage.getItem("vitCount");

  if (savedEggs !== null) {
    eggs = parseInt(savedEggs);
  }
  if (savedEggPerSecond !== null) {
    eggPerSecond = parseInt(savedEggPerSecond);
  }
  if (savedEggPerClick !== null) {
    eggPerClick = parseInt(savedEggPerClick);
  }
  // Ajoutez ces lignes pour charger le nombre de "Own Bonus"
  if (savedDragonBallCount !== null) {
    document.getElementById("dball-number").textContent = savedDragonBallCount;
  }
  if (savedTrainerCount !== null) {
    document.getElementById("trainer-number").textContent = savedTrainerCount;
  }
  if (savedArrowCount !== null) {
    document.getElementById("arrow-nb").textContent = savedArrowCount;
  }
  if (savedForgeCount !== null) {
    document.getElementById("forge-nb").textContent = savedForgeCount;
  }
  if (savedVitCount !== null) {
    document.getElementById("vit-nb").textContent = savedVitCount;
  }
}

function displayEggs() {
  const eggCounter = document.getElementById("egg-count");
  const eggPerSecCounter = document.getElementById("eggPerSec-count");
  const eggPerClickCounter = document.getElementById("eggPerClick-count");

  eggCounter.innerHTML = "Eggs : " + eggs;
  eggPerSecCounter.innerHTML = "Eggs/second: " + eggPerSecond;
  eggPerClickCounter.innerHTML = "Eggs/click: " + eggPerClick;
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

    button.addEventListener("click", () => {
      if (!button.hasAttribute("disabled")) {
        button.setAttribute("disabled", "disabled"); // Désactive le bouton

        if (eggs >= cardData.price) {
          cardData.effect();

          // Après avoir effectué l'achat, mettez à jour le montant d'œufs et l'état des boutons
          eggs -= cardData.price;
          displayEggs();
          updateButtonsState();
        }

        button.removeAttribute("disabled"); // Réactive le bouton
      }
    });
  });

  bonusButtons.forEach((button) => {
    const price = parseInt(button.dataset.price);
    updateButtonState(button, price);
    button.addEventListener("click", () => {
      if (!button.hasAttribute("disabled")) {
        button.setAttribute("disabled", "disabled"); // Désactive le bouton

        if (eggs >= cardData.price) {
          cardData.effect();

          // Après avoir effectué l'achat, mettez à jour le montant d'œufs et l'état des boutons
          eggs -= cardData.price;
          displayEggs();
          updateButtonsState();
        }

        button.removeAttribute("disabled"); // Réactive le bouton
      }
    });
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
  loadEggs();
  randomEggBonus(); // addEggPerSecond();

  const eggImage = document.getElementById("egg-image");

  // effet de bouton sur l'oeuf
  eggImage.addEventListener("mousedown", () => {
    eggImage.style.transform = "scale(0.95)";
  });
  eggImage.addEventListener("mouseup", () => {
    eggImage.style.transform = "scale(1)";
  });
  eggImage.addEventListener("click", function () {
    console.log("click : " + eggs);
    addEggs(eggPerClick);
  });
});
