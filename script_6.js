/*
UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
CCU ou CCC ou CCA ou CCG => Proline
UUA ou UUG => Leucine
UUU ou UUC => Phénylalanine
CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
UAU ou UAC => Tyrosine
*/

//Effectue la traduction en fonction du codon
function conversionProteine (codon) {
    switch (codon) {
        case 'UCU':
        case 'UCC':
        case 'UCA':
        case 'UCG':
        case 'AGU':
        case 'AGC':
            return 'Sérine';
        case 'CCU':
        case 'CCC':
        case 'CCA':
        case 'CCG':
          return 'Proline';
        case 'UUA':
        case 'UUG':
            return 'Leucine';
        case 'UUU':
        case 'UUC':
            return 'Phénylalanine';
        case 'CGU':
        case 'CGC':
        case 'CGA':
        case 'CGG':
        case 'AGA':
        case 'AGG':
            return 'Arginine';
        case 'UAU':
        case 'UAC':
            return 'Tyrosine';
        default:
          console.log("Cette entrée n'est pas reconnue");
          break;
      };
}

// Décompse les 3 acides aminés en groupe à traduire
function decomposeArn(arn) {
    let arrayArn = [];
    long = arn.length;
    let i = 0;
    while (i<=long) {
        arrayArn.push(arn.slice(i, i+3));
        i = i + 3;
    }
    return arrayArn;
}

// Prendre l'ARN
// Décompose avec une fonction dans un tableau
// Parcourt du tableau pour traduire en protéine
function afficheProteine(arnToDecode) {
    let proteine = decomposeArn(arnToDecode); // décompose ARN
    let arrayProteine = [];
    for (let i = 0; i < proteine.length-1; i++) {
        arrayProteine.push(conversionProteine(proteine[i]));   // tradcution codons en clair
    }
    console.log(`ARN à décoder : ${arnToDecode} en ${arrayProteine.join('-')}`);  // Affiche la traduction
}

// ARN à décoder = "UUACGCAGUAGA";
// ARN à décoder  = "CCGUCGUUGCGCUACAGC";
// ARN à décoder  = "CCUCGCCGGUACUUCUCG";
afficheProteine("UUACGCAGUAGA");
afficheProteine("CCGUCGUUGCGCUACAGC");
afficheProteine("CCUCGCCGGUACUUCUCG");

