/* Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto. ** */

const { name } = require('./names.js');
const { hobbies } = require('./hobbies.js');

function person() {
    const fullName = name("Antonella", "Leo");
    const userHobbies = hobbies("Musica", "Cinema", "Gastronomia");
    
    return {
        fullName: `${name.firstName} ${name.lastName}`,
        userHobbies: hobbies
    };
}