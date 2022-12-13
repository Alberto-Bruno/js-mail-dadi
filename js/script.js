console.log('JS OK');

/*
- generare un numero random da 1 a 6, sia per il giocatore sia per il Computer
- stabilire il vincitore, in base a chi fa il punteggio più alto
- stampiamo in pagina i due tiri e il risultato
*/

// Elementi
const resultElement = document.getElementById('result');

// generare un numero da 1 a 6 PC e player
const pcNum = Math.floor(Math.random() * 6) + 1;
const playerNum = Math.floor(Math.random() * 6) + 1;
console.log(pcNum, playerNum)

let message = "E' un pareggio";


if (playerNum > pcNum) {
    message = 'Ha vinto il player';
} else if (playerNum < pcNum) {
    message = 'Ha vinto il Computer';
}

console.log(message);
resultElement.innerHTML = `
<div>Tiro del giocarore: <strong>${playerNum}</strong></div>
<div> Tiro del Computer: <strong>${pcNum}</strong></div>
<h3>${message}</h3>
`