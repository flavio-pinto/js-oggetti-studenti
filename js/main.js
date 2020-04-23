/**
 * Creare un oggetto che descriva uno studente
 * lo studente avrà  le seguenti proprietà: nome, cognome e età.
 * Stampare attraverso il for..in tutte le proprietà (chiavi e valori)
 */

// Creo oggetto che descrive uno studente
var infoStudente = {
    nome: 'Jane',
    cognome: 'Doe',
    età: 21
};
console.log(infoStudente);


// Stampo chiavi e valori dell'oggetto
for(var key in infoStudente) {
    console.log(key + ': ' + infoStudente[key]);
}