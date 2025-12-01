const SPLASHES = [
    "Jebi se",
    "Drkam svaki dan",
    "Red-pillan i baziran",
    "Moje ime je Stojadin!",
    "Napaljena Jovana u tvojoj blizini",
    "INFOWARS.COM",
];

let splash;
let i;
let intervalId;
let timeoutId;


function chooseRandomSplash() {
    let randomSplash;

    do {
        randomSplash = SPLASHES[Math.floor(Math.random() * SPLASHES.length)];
    } while (splash == randomSplash);

    splash = randomSplash;
}

function showLetter() {
    document.getElementById("secret").innerHTML = splash.substring(0, i);

    if (i == splash.length) {
        clearInterval(intervalId);
        intervalId = null;
        timeoutId = setTimeout(concealSplash, 2000);
    } else {
        i += 1;
    }
}

function revealSplash() {
    timeoutId = null;
    chooseRandomSplash();
    i = 0;
    intervalId ??= setInterval(showLetter, 50);
}

function hideLetter() {
    document.getElementById("secret").innerHTML = splash.substring(0, i);

    if (i == 0) {
        clearInterval(intervalId);
        intervalId = null;
        timeoutId = setTimeout(revealSplash, 2000);
    } else {
        i -= 1;
    }
}

function concealSplash() {
    timeoutId = null;
    intervalId ??= setInterval(hideLetter, 50);
}

timeoutId = setTimeout(revealSplash, 30000);

onmousemove = (event) => {
    document.getElementById("secret").innerHTML = "";
    clearInterval(intervalId);
    clearTimeout(timeoutId);
    intervalId = null;
    timeoutId = setTimeout(revealSplash, 30000);
}