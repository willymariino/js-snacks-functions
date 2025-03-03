/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function getInitials(names) {
    // creiamo un array vuoto per le iniziali
    let initials = []
    // inizializzazione, condizione, incremento
    for (let i = 0; i < names.length; i++)
        //isolo le iniziali, e poi le spingo nella nuova variabile initials
        initials.push(names[i].charAt(0))
    //  initials.push: vado a mettere i nuovi elementi nel nuovo array vuoto della variabile initials, spingendoli dentro dal fondo

    //   names[i]: indico quale elemento dell'array originario names voglio andare a prendere, utilizzando le parentesi quadre, 
    //      usando [i] prendo un elemento che passa alla posizione successiva ad ogni ciclo, grazie all'incremento i++ 
    //      (i è l'indice corrente che cambia ad ogni iterazione)

    //  charAt: indico quale lettera della stringa che compone l'elemento dell'array voglio prendere, 
    //      con un numero positivo parte dall'inizio, con un numero negativo parte dalla fine della stringa.
    return initials;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(getInitials(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]