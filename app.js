
/* Consegna 
Scrivete tre programmi che data la seguente lista:
  Animale preferito:
  1. Dog
  2. Cat
  3. Goldfish
  4. Monkey
  5. Panda
prenda in input un valore numerico che rappresenti la scelta e stampi in console:
  - se la scelta non è tra quelle elencate la scritta ‘Animal not found’,
  - altrimenti la scelta effettuata ‘Chose the ……..’
 Esempi:
  Input: scelta = 4
  Output: Chose the Monkey
  Input: scelta = 7
  Output: Animal not found
per il primo programma utilizzate l’istruzione condizionale if con le sue varianti else e/o else if
per il secondo utilizzate switch
e per il terzo l’operatore ternario
la prima riga di codice sarà la seguente:
let animal = prompt(“Animale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda “);
ps: documentatevi su \n lo trovate inserito all’interno del testo da stampare nel prompt.
Da qui in poi ricordatevi sempre di creare una nuova repo pubblica su GitHub dove fare il push dell’esercizio. Esercizio nuovo repo nuova */

/* Programa 1 */
let animal = prompt("Animale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda")

if (animal == 1) {
    console.log("Chose dog");
} if (animal == 2) {
    console.log ("Chose cat")
} if (animal == 3) {
    console.log ("Chose Goldfish")
} if (animal == 4) {
    console.log ("Chose Monkey")
} if (animal == 5) {
    console.log ("Chose Panda")
} else if (animal < 1 || animal > 5){
    console.log ("Animal not found")
}

/* Programma 2 */
let animal = prompt("Animale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda")

switch (animal) {
    case "1":
        console.log ("Chose Dog");
        break;
    case "2":
        console.log ("Chose Cat");
        break;
    case "3":
        console.log ("Chose Goldfish");
        break;
    case "4":
        console.log ("Chose Monkey");
        break;
    case "5":
        console.log ("Chose Panda");
        break;
    default:
        console.log ("Animal not found");
        break;        
}

/* Programma 3 */
let animal = prompt("Animale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda");

let input = (animal == 1) ? "Chose Dog"
    : (animal == 2) ? "Chose Cat"
    : (animal == 3) ? "Chose Goldfish"
    : (animal == 4) ? "Chose Monkey"
    : (animal == 5) ? "Chose Panda"
    : "Animal not found";

console.log(input)
