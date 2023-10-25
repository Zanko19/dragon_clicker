
let eggs = 0;
let eggPerSecond = 1;
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
    displayEggs();
    updateEggImage();
}


function addEggPerSecond() {
    setInterval(addEggs(eggPerSecond), 1000);
}

const eggImage = document.getElementById("egg-image");


/**
 * fonction qui met a jour l'image de l'oeuf de dragon pour chaque palier d'oeuf debloqué
 *
 */
function updateEggImage() {

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



function startAutoClick() {
    const autoclickInterval = 500;

    const autoclickIntervalId = setInterval(() => {
        incrementEggCount();
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
    eggCounter.innerHTML = eggs;
}

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


document.addEventListener("DOMContentLoaded", function () {

    loadEggs();
    updateEggs();
    RandomEggBonus();

    eggImage.addEventListener("click", function () {
        console.log("click : " + eggs);
        addEggs(eggPerClick);
    });

    addEggPerSecond();

    eggElement.addEventListener("click", incrementEggCount);


});

