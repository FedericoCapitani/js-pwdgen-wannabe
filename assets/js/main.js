// generare una password

// chiedere nome all'utente

const first_name = prompt('Inserisci il tuo nome');

// chiedere cognome all'utente
const last_name = prompt('Inserisci il tuo cognome');

// chiedere colore preferito all'utente
const color = prompt('Inserisci il tuo colore preferito');
console.log(first_name, last_name, color);

// generare numero
const number = 22;

// generare la password

const password = `${first_name + last_name + color + number}`

// scrivere la pwd generta
document.getElementById('pwd').innerHTML = password;