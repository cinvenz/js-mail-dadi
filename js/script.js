/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
BONUS:
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */

// ESERCIZIO EMAIL

const email = ['boolean@gmail.com', 'html@gmail.com', 'css@gmail.com', 'js@gmail.com', 'salmon@gmail.com'];

const mailUser = document.querySelector('.insertmail');
let btnCheck =document.querySelector('.btn');

btnCheck.addEventListener('click', function() {
    if (email.includes(mailUser.value)) {
        console.log('email confermata')
        alert('email confermata')
    }
    else {
        console.log('email errata')
        alert('email errata')
    }
})

// ESERCIZIO DADI

let btnDadi = document.querySelector('.btn-dadi')

btnDadi.addEventListener('click', function() {
    const numUser = Math.floor(Math.random() * 6 ) +1;
    console.log('il tuo numero è: ' + numUser)
    const numComputer = Math.floor(Math.random() * 6 ) +1;
    console.log('il numero del computer è: ' + numComputer)

    if (numUser > numComputer) {
        alert('Hai vinto')
    } else if (numUser < numComputer) {
        alert('Hai perso')
    }
    else {
        alert('Pareggio')
    }
    

});