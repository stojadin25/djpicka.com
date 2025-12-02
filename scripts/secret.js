const MESSAGES = [
    "Jebi se",
    "Drkam svaki dan",
    "Red-pillan i baziran",
    "Moje ime je Stojadin!",
    "Napaljena Jovana u tvojoj blizini",
    "INFOWARS.COM",
];

let message;
let i;
let intervalId;
let timeoutId;

function chooseRandomMessage() {
    let randomMessage;

    do {
        randomMessage = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
    } while (message == randomMessage);

    message = randomMessage;
}

function revealSubstring(direction) {
    document.getElementById("secret").innerHTML = message.substring(0, i);

    if (direction > 0 && i == message.length) {
        clearInterval(intervalId);
        intervalId = null;
        timeoutId = setTimeout(hide, 2000);
    } else if (direction < 0 && i == 0) {
        clearInterval(intervalId);
        intervalId = null;
        timeoutId = setTimeout(reveal, 2000);
    } else {
        i += direction;
    }
}

function reveal() {
    chooseRandomMessage();
    i = 0;
    intervalId ??= setInterval(revealSubstring, 50, 1);
}

function hide() {
    intervalId ??= setInterval(revealSubstring, 50, -1);
}

revealTimeoutId = setTimeout(reveal, 30000);

onmousemove = (event) => {
    document.getElementById("secret").innerHTML = "";
    clearInterval(intervalId);
    clearTimeout(revealTimeoutId);
    intervalId = null;
    revealTimeoutId = setTimeout(reveal, 30000);
}