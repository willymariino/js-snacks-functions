/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

function hello(saluto) {
    let greeting = "ciao" + userName;
    return greeting
}

// Invoca la funzione qui e stampa il risultato in console

console.log(hello(userName)); //non ho capito perchè ci va anche userName tra parentesi e non basta solo hello

//Risultato atteso se si passa 'Mario': // ciao Mario
