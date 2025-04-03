import {fetchAnimals} from './index.js';


export class PetForAdoption {
    constructor(photo, name, id, species, age, gender, size, description/*,  location, status, url */) {
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
        /* this.location = location; */
        /* this.status = status; */
        /* this.url = url; */
        this.isFavorite = false;
    }

/*     showInfo() {
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
    } */

}
 