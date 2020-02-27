// Si on lui pose une question, le bot répond "Ouais Ouais..." ;
// Si on lui hurle dessus, le bot répond "Pwa, calme-toi..." ;
// Si la phrase que tu prononces contient le mot "Fornite", le bot répond "on s' fait une partie soum-soum ?" ;
// Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
// Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;

let questionHuman = prompt("What's up ? Je suis à ta disposition.");

// Si on lui pose une question, le bot répond "Ouais Ouais..." ;
if (questionHuman.match(/[?]/g)) {   // cherche un ?
    console.log("Ouais Ouais...");
// Si on lui hurle dessus, le bot répond "Pwa, calme-toi..." ;
} else if (questionHuman.match(/^[^a-z]+$/)) {  // match les majsuculepar la négation début et fin texte
    console.log("Pwa, calme-toi...")
// Si la phrase que tu prononces contient le mot "Fornite", le bot répond "on s' fait une partie soum-soum ?" ;
// on essaye str.includes pour changer...plus simple aussi
} else if (questionHuman.includes('Fornite')) {
    console.log("on s' fait une partie soum-soum ?");
// Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
} else if (questionHuman === '') {
    console.log("t'es en PLS ?")
// Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;
} else {
    console.log("balek.");
}