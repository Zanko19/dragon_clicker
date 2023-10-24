
let eggs = 0;
let eggPerSecond = 0;
let eggPerClick = 1;



let boutiqueList = [
    {
        name: "Fleche",
        description: "Augmente le nombre d'oeufs par clic",
        price: 30,
        effect: function () {
            eggPerClick += 5;
        }
    },
    {
        name: "Vitamines",
        description: "Augmente le nombre d'oeufs par seconde (5)",
        price: 60,
        effect: function () {
            eggPerSecond = 5;
        }
    },
    {
        name: "Forgeron",
        description: "+2% de production oeuf par seconde",
        price: 100,
        effect: function () {
            eggPerSecond += 1;
            // eggPerSecond += (eggPerSecond * 0.02);
        }
    },
    {
        name: "Mine",
        description: "+5% de production oeuf par seconde",
        price: 150,
        effect: function () {
            eggPerSecond += (eggPerSecond * 0.05);
        }
    },
    {
        name: "Dragon",
        description: "+8% de production oeuf par seconde",
        price: 200,
        effect: function () {
            eggPerSecond += (eggPerSecond * 0.08);
        }
    },
    {
        name: "Ferme",
        description: "+10% de production oeuf par clic",
        price: 400,
        effect: function () {
            eggPerClick += (eggPerClick * 0.1);
        }
    },
    {
        name: "Incubateur",
        description: "+12% de production oeuf par clic",
        price: 800,
        effect: function () {
            // Code pour doubler la production d'œufs de dragon
        }
    },
    {
        name: "Usine",
        description: "+15% oeuf par seconde",
        price: 1400,
        effect: function () {
            // Code pour doubler la production d'œufs de dragon
        }
    },
    {
        name: "Banque",
        description: "+20% oeuf par seconde",
        price: 1400,
        effect: function () {
            // Code pour doubler la production d'œufs de dragon
        }
    },
    {
        name: "Elevage de dragons",
        description: "+25% oeuf par clic",
        price: 1400,
        effect: function () {
            // Code pour doubler la production d'œufs de dragon
        }
    },
];

function addEggs(nb) {
    eggs += nb;
    eggCounter.innerHTML = eggs;
}

function addEggPerSecond() {
    setInterval(addEggs(eggPerSecond), 1000);
}

const eggImg = document.getElementById("eggImg");
const eggCounter = document.getElementById("egg-count");



document.addEventListener("DOMContentLoaded", function () {

    eggImg.addEventListener("click", function () {
        console.log("click : " + eggs);
        addEggs(eggPerClick);
    });
});