/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function filterinitials(names) {
    let initials = []
    for (let i = 0; i < names.length; i++)
        initials.push(names[i].filter(a))
    return initials;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(filterinitials(names));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]