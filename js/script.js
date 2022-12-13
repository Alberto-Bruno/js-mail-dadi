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



/*
- Chiedi all'utente la sua email, con uin piccolo form.
- Controllare che sia nella lista di chi può accedere.
- Stampa un messaggio appropriato sull'esito del controllo.
*/

// creo la lista di email autorizzate
const allowedEmails = [
    'name0@outlook.it',
    'name1@outlook.it',
    'name2@outlook.it',
    'name3@outlook.it',
    'name4@outlook.it',
    'name5@outlook.it',
];

// Prendo gli elemeti dalla pagina
const emailField = document.getElementById('email');
const button = document.getElementById('button');
const result = document.getElementById('result');

// Agganciamo l'event listner al click del buttom
button.addEventListener('click', function () {
    // Raccolgo il valore dall'imput (la mail)
    const userEmail = emailField.value.trim();

    // Validazione
    if (!userEmail) {
        result.classList.add('text-danger');
        result.innerText = 'Email non valida';
        return;
    }

    let isAllowed = false;

    // Controlliamo se la mail inserita è tra quelle autorizate
    for (let i = 0; i < allowedEmails.length; i++) {
        const currentEmail = allowedEmails[i];
        console.log(currentEmail);
        if (currentEmail === userEmail) {
            isAllowed = true;
        }
    }

    // TERNARIO... Nome costante = condizione ? se true : se False;
    result.innerText = isAllowed ? 'Benvenuto' : 'Spiacente, email non autorizzata';
});

