import {fetchAnimals} from './api.js';


class PetForAdoption {
    constructor(photo, name, id, species, age, gender, size, description, location, status, url) {
        this.photo = photo;
        this.name = name;
        this.id = id;
        /* this.organization_id = organization_id; */
        this.species = species;
        this.age = age;
        this.gender = gender;
        this.size = size;
        this.description = description;
        /* this.breed = breed; */
        this.location = location;
        this.status = status;
        this.url = url;
    }

    showInfo() {
        console.log(`Photo: ${this.photo || "No photo available"}`);
        console.log(`Name: ${this.name}`);
        console.log(`Species: ${this.species}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`Size: ${this.size}`);
        console.log(`Description: ${this.description}`);
        console.log(`Location: ${this.location.city}, ${this.location.state}`);
        console.log(`Available for adoption: ${this.status === "adoptable" ? "Yes" : "No"}`);
        console.log(`More info: ${this.url}`);
    }

    showImg() {
        console.log(this.photo || "No image available")
    }

}

/* necesito un foreach para iterar el array que devuelve la api y una variable en la que almacenar lo que devuelve esa iteración, que s eva a almacenar en una unstancia de objeto con animal, como elemento individual derivado de animals y luego debo llamar a las funciones que declaré anteriormente */

function createPet(animals) {
    animals.forEach(animal => {
        const photoUrl = animal.photos && animal.photos.length > 0 && animal.photos[0].medium ? animal.photos[0].medium : 'https://via.placeholder.com/150';
        const id = animal.id ? animal.id : 'ID not available';
        const name = animal.name ? animal.name : 'Name not available';
        const species = animal.species ? animal.species : 'Species not available';
        const age = animal.age ? animal.age : 'Age not available';
        const gender = animal.gender ? animal.gender : 'Gender not available';
        const size = animal.size ? animal.size : 'Size not available';
        const description = animal.description ? animal.description : 'Description not available';
        const breed = animal.breed ? animal.breed : 'Breed not available';
        
        const location = animal.location ? { city: animal.location.city || 'City not available', state: animal.location.state || 'State not available' }: { city: 'City not available', state: 'State not available' };
        
        const status = animal.status ? animal.status : 'Status not available';
        const url = animal.url ? animal.url : '#';

        const pet = new PetForAdoption(photoUrl, name, id, species, age, gender, size, description, location, status, url); // si cambio el orden de los parámetros dara errores de renderización
        
        pet.showInfo();
        pet.showImg();
    });
}





window.onload = async function() {
    const animals = await fetchAnimals(); 
    createPet(animals);  
  }
  
