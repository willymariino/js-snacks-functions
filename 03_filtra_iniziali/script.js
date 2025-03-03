/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function filterinitials(names, letters) {
    let initials = []
    for (let i = 0; i < names.length; i++)
        // controlla se il nome inizia con la lettera specificata (case insensitive)
        if (names[i].charAt(0).toLowerCase() === letters.toLowerCase()) {
            initials.push(names[i]); // aggiunge il nome all'array risultato
        }
    return initials;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(filterinitials(names));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]