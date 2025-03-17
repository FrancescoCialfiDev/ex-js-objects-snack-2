// Code question 1

// 1) Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// - In console verrà stampato sempre "Double Cheese Burger" in entrambi i casi poichè l'oggetto un secondBurger viene passato per reference e non viene fatta una copia distinta e separata. Quindi cambiando il name di secondBurger cambierà anche in hamburger.

console.log(hamburger.name); // 'Double Cheese Burger'
console.log(secondBurger.name); // 'Double Cheese Burger'


// 2) Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// - Sempre uno poichè non ne viene creato uno nuovo ma si fa sempre riferimento allo stesso oggetto.

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Code question 2

// 1) Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// - In console verrà stampato "Salad" poichè quando andiam ad utilizzare lo spread operator stiamo effettuando una shallow copy ( ossia una copia superficiale dell'oggetto ) sul primo livello di proprieta, mentre ingredients viene passato per reference quindi una modifica alla copia andrò ad incidere anche sull'originale della proprietà ingredients.

console.log(hamburger.ingredients[0]); // "Salad"
console.log(secondBurger.ingredients[0]); // "Salad"

// 2) Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// - Sono stati creati tre oggetti totali.

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Code question 3

// 1) Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// - In memoria sono stati creati 9 oggetti

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Code question 4
// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// - Il metodo migliore per clonare l'oggetto chef è lo spread operator poichè trattandosi di un oggetto con struttura di primo livello grazie allo spread possiamo creare una copia indipendente e copiare anche la funzione, che nel caso di structured clone e jsonparse(json.stringify) non sarebbe possibile.

// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
// - Il metodo migliore per clonare l'oggetto restaurant è structured clone, poichè a differenza di jsonParse... supporta l'oggetto date nativo di js e quindi avremmo una copia effettiva dell'oggetto con i suoi relativi metodi a differenza di json parse che avrebbe riportato solo la data formato stringa.

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Code question 5
// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

console.log(hamburger.maker.name); // "Chef Hyur"
console.log(secondBurger.maker.name); // "Chef Hyur"
console.log(hamburger.maker.restaurant.name); // "Hyur's II"
console.log(secondBurger.maker.restaurant.name); // "Hyur's II"

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// Sono stati creati 5 oggetti

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Code question 5
// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// La scelta piu legacy sarenne quella di optare per un mit tra spead operator e structuredclone perchè avremmo bisogno di fare una copia profonda trattandosi "chef" di un oggetto complesso e allo tempo avremmo bisogno dello spread per clonare la struttura degli oggetti interni come restaurant e address per clonare anche le funzioni.
// Ma se dovessimo utilizzare un metodo universale per rendere il tutto piu comodo e ottimizzato ci potremmo servire di una libreria esterna come lodash che è in grado di effettuare copie profonde e di includere anche le funzioni.

/////////////////////////////////////////////////////////////////////////////////////////////////////

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}

function copyObject(obj) {
    if (typeof obj !== "object") {
        return obj
    }
    const copy = {}
    for (const key in obj) {
        const value = obj[key]
        if (typeof value !== "object") {
            copy[key] = value
        } else {
            copy[key] = copyObject(value)
        }
    }

    return copy
}

const copy = copyObject(chef)
console.log(copy)


