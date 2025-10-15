const SPLASHES = [
    "Jebi se",
    "Drkam svaki dan",
    "Red-pillan i baziran",
    "Moje ime je Stojadin!!!",
    "Napaljena Jovana iz Novog Sada traži muškarce za zabavu",
    "INFOWARS.COM",
];

document.getElementById("secret").innerText = SPLASHES[Math.floor(Math.random() * SPLASHES.length)];