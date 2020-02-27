/*
"Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
  // Utilisateur rentre un nombre (par ex 5)
    #
   ##
  ###
 ####
#####
*/

let numLevel = prompt ("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let brick = "#";
let i = 1

while (i<=numLevel) {
    let line  = "";
    for (let k = 0; k < (numLevel-i); k++) {
        line += " "  
    }
    for (let index = 0; index < i; index++) {
        line = line + brick;
    }
    i++;
    console.log(line);
}