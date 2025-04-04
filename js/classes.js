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



}
 