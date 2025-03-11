/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */




// Dichiara la funzione qui.



function getvowels(vowels) {
    let conteggio = 0
    const vocali = ["a", "e", "i", "o", "u",]
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            conteggio++
        }


        return conteggio
    }
}

const risultato = getvowels("result")
console.log("le vocali sono", risultato)



// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)