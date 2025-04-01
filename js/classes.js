class PetsForAdoption {
    constructor(photos, id, organization_id, species, age, gender, size, description, location, status, url) {
        this.photos = photos;
        this.id = id;
        this.organization_id = organization_id;
        this.species = species;
        this.age = age;
        this.gender = gender;
        this.size = size;
        this.description = description;
        this.breed = breed;
        this.location = location;
        this.status = status;
        this.url = url;
    }

    showInfo() {
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
        if (this.photos.length > 0) {
            console.log(this.photos[0]);  
        } else {
            console.log("No hay fotos disponibles.");
        }
    }

}
