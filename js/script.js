// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!


// Inizializzo Variabili
const resultElement = document.querySelector("#result");
const countDownDate = new Date("Feb 12, 2024 09:30:00").getTime();

console.log(resultElement, countDownDate);

// creo la timing function per il countdown
setInterval(function() {
    
    // inizializzo la variabile che contiene l'orario in cui viene visualizzata la pagina e calcolo i millisecondi mancante alla scadenza
    const now = new Date().getTime();
    let timeLeft = countDownDate - now;
    console.log(timeLeft)

    // converto i millisecondi mancanti in giorni, ore , minuti e secondi
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    console.log (days, hours, minutes, seconds);

    resultElement.innerHTML = days + " giorni, " + hours + " ore, " + minutes + " minuti e " + seconds + " secondi "

}, 1000)
