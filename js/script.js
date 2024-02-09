// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!


// Inizializzo Variabili
const resultElement = document.querySelector("#result");
const countDownDate = new Date("Feb 12, 2024 09:30:00").getTime();

// creo la timing function per il countdown
const countDown = setInterval(function() {
    
    // inizializzo la variabile che contiene l'orario in cui viene visualizzata la pagina e calcolo i millisecondi mancante alla scadenza
    const now = new Date().getTime();
    let timeLeft = countDownDate - now;

    // converto i millisecondi mancanti in giorni, ore , minuti e secondi
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // inizializzo elementi HTML in cui visualizzare il countdown
    const daysElement = document.querySelector("#days");
    const hoursElement = document.querySelector("#hours");
    const minutesElement = document.querySelector("#minutes");
    const secondsElement = document.querySelector("#seconds");

    // stampo in pagina il countdown
    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;

    // se countdown scaduto 
    if (timeLeft < 1000) {
        clearInterval(countDown);
        daysElement.innerHTML = 0;
        hoursElement.innerHTML = 0;
        minutesElement.innerHTML = 0;
        secondsElement.innerHTML = 0;
        resultElement.innerHTML = "LA LEZIONE È INIZIATA!"
    }

}, 1000)
