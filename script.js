
function updateEggImage() {
  const eggImage = document.getElementById("egg-image");

  let imageSrc;

  switch (true) {
    case eggs < 1000:
      imageSrc = "assets/dragon_egg/oeuf_dragon_1.png";
      break;
    case eggs < 2000:
      imageSrc = "assets/dragon_egg/oeuf_dragon_2.png";
      break;
    case eggs < 3000:
      imageSrc = "assets/dragon_egg/oeuf_dragon_3.png";
      break;
    case eggs < 5000:
      imageSrc = "assets/dragon_egg/oeuf_dragon_4.png";
      break;
    case eggs < 6000:
      imageSrc = "assets/dragon_egg/oeuf_dragon_5.png";
      break;
    case eggs < 10000:
      imageSrc = "assets/dragon_egg/oeuf_dragon_6.png";
      break;
    case eggs < 15000:
      imageSrc = "assets/dragon_egg/oeuf_dragon_7.png";
      break;
    case eggs < 50000:
      imageSrc = "assets/dragon_egg/oeuf_dragon_8.png";
      break;
    case eggs < 100000:
      imageSrc = "assets/dragon_egg/oeuf_dragon_9.png";
      break;
    case eggs < 120000:
      imageSrc = "assets/dragon_egg/oeuf_dragon_10.png";
      break;
    case eggs < 150000:
      imageSrc = "assets/dragon_egg/oeuf_dragon_11.png";
      break;
    case eggs < 200000:
      imageSrc = "assets/dragon_egg/oeuf_dragon_12.png";
      break;
  }
  eggImage.src = imageSrc;
}

updateEggImage();
