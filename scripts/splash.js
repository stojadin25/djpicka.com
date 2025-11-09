const SPLASHES = [
    "Jebi se",
    "Drkam svaki dan",
    "Red-pillan i baziran",
    "Moje ime je Stojadin!!!",
    "Napaljena Jovana u tvojoj blizini",
    "INFOWARS.COM",
];

document.getElementById("secret").innerText = SPLASHES[Math.floor(Math.random() * SPLASHES.length)];