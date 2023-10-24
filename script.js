let eggs = 0;




let boutiqueList = [
    {
        name: "Fleche",
        description: "Augmente le nombre d'oeufs par clic",
        price: 30,
        effect: function () {
            
        }
    },
    {
        name: "Vitamines",
        description: "Augmente le nombre d'oeufs par seconde (5)",
        price: 60,
        effect: function () {
            setInterval(addEggs(5), 1000);
        }
    },
    {
        name: "Forgeron",
        description: "+2% de production oeuf par seconde",
        price: 100,
        effect: function () {
            // Code pour doubler la production d'œufs de dragon
        }
    },
    {
        name: "Mine",
        description: "+5% de production oeuf par seconde",
        price: 150,
        effect: function () {
            // Code pour doubler la production d'œufs de dragon
        }
    },
    {
        name: "Dragon",
        description: "+8% de production oeuf par seconde",
        price: 200,
        effect: function () {
            // Code pour doubler la production d'œufs de dragon
        }
    },
    {
        name: "Ferme",
        description: "+10% de production oeuf par clic",
        price: 400,
        effect: function () {
            // Code pour doubler la production d'œufs de dragon
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

function addEggs(nb){
    eggs+=nb;
}
