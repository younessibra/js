// Startup nation
/*
Afficher dans la console les questions suivantes et leur réponses :

    Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
    Sors une array qui contient le prénom et le nom des entrepreneurs ;
    Quel âge aurait chaque inventeur aujourd'hui ?
    Trie les entrepreneurs par ordre alphabétique du nom de famille.
*/


const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];



// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
console.log('--------------------- Boss seventies');
let someBoss = entrepreneurs.filter(entrepreneur => (entrepreneur.year > 1969 && entrepreneur.year < 1980));
for(let index in someBoss) {
    //console.log(index); 
    console.log(someBoss[index].first + " " + someBoss[index].last);
}
console.log('--------------------- ');

//Sors une array qui contient le prénom et le nom des entrepreneurs ;
console.log('--------------------- Array avec prénom et nom des boss');
let identify = [];
for(let index in entrepreneurs) {
    let temp = entrepreneurs[index].first + " " + entrepreneurs[index].last;
    identify.push(temp);
    console.log(identify[index]);
}
console.log('--------------------- ');

// Quel âge aurait chaque entrepreneur aujourd'hui ?
console.log('--------------------- Age de chaque entrepreneur en 2019');
for(let index in entrepreneurs) {
    console.log(entrepreneurs[index].first + " " + entrepreneurs[index].last + " aurait :" + (2019 - entrepreneurs[index].year) + " ans");
}
console.log('--------------------- ');

//Trie les entrepreneurs par ordre alphabétique du nom de famille.
console.log('--------------------- Tri nom de famille des entrepreneurs');
// je créé un array avec nom et préom pour trier
let lastNameBoss = [];
for(let index in entrepreneurs) {
    let tmp = entrepreneurs[index].last + " " + entrepreneurs[index].first;
    lastNameBoss.push(tmp);
}
// je trie avec .sort()
lastNameBoss.sort();
let name = [];
for(let index in lastNameBoss) {
    // affiche prénom nom
    name = lastNameBoss[index].split(' ');
    //console.log(lastNameBoss[index]);
    console.log(name[1] + " " + name[0]);
}
console.log('--------------------- terminé pour ce script');