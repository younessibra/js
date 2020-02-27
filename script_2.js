// Un prompt s'affiche avec la question suivante
//   -> "De quel nombre veut tu calculer la factorielle ?"
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
//   -> "Le résultat est : 24"

let myNumber = prompt("De quel nombre veut tu calculer la factorielle ?");

//fonction factorielle

function factorielle(myNumber) {
    let fact = 1;
    for (let index = myNumber; index > 1; index--) {
        fact = fact * index;
    }
    return fact;
}

console.log(`Le résultat est : ${factorielle(myNumber)}`);