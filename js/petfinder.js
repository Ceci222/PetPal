import {fetchAnimals} from './index.js';
import { PetForAdoption } from './classes.js';


    document.getElementById('petfinder-link').addEventListener('click', async (event) => {
        event.preventDefault();
        const animals = await fetchAnimals();
        if (animals) {
            const petInstances = createPet(animals);
            renderAnimals(petInstances);
        } else {
            console.error('Unable to load animals');
        }
    });
    
    function createPet(animals) {
    return animals.map(animal => new PetForAdoption(
        animal.photos?.[0]?.medium || null,
        animal.name || 'Name not available',
        animal.id || 'ID not available',
        animal.species || 'Species not available',
        animal.age || 'Age not available',
        animal.gender || 'Gender not available',
        animal.size || 'Size not available',
        animal.description ||  'Description not available', 
        
        ))

    };
    
 
    
    export function renderAnimals(animals) { 

        const petfinderSection = document.getElementById('petfinder');
        petfinderSection.innerHTML = ''; 
        petfinderSection.style.display = 'flex'; 

        const homeSection = document.getElementById('home');
        homeSection.style.display = 'none';

        const favouritesSection = document.getElementById('favourites');
        favouritesSection.style.display = 'none';

        const contactSection = document.getElementById('contact');
        contactSection.style.display = 'none';

        animals.forEach(pet => {
    
            const petWrapper = document.createElement('div');
            petWrapper.setAttribute('class', 'pet-wrapper')
            document.getElementById('petfinder').appendChild(petWrapper);
    
     
            const petPhotos = document.createElement('img');
    
            if (pet.photo) { 
                petPhotos.src = pet.photo;
                petPhotos.alt = 'Pet image';
                petPhotos.onerror = () => {
                    petPhotos.src = './assets/pug.jpg'; 
                };
            } else {
                petPhotos.src = './assets/no-pic.jpg';
            }
    
            petWrapper.appendChild(petPhotos)
     
            const nameContainer = document.createElement('div');
            nameContainer.className = 'pet-info-pairs';
            const petName =  document.createElement('h1');
            petName.textContent = 'Name:';
            const petNameParagraph = document.createElement('p');
            petNameParagraph.textContent = pet.name ||'This pet is waiting for you to give it a name';
             

            nameContainer.append(petName, petNameParagraph);
            petWrapper.appendChild(nameContainer);
            
            const petIdContainer = document.createElement('div');
            petIdContainer.className = 'pet-info-pairs';
            const petId =  document.createElement('h1');
            petId.textContent = 'Pet Id:';
            const petIdParagraph = document.createElement('p')
            petIdParagraph.textContent = pet.id ? pet.id : 'ID not available';
            petIdContainer.append(petId, petIdParagraph); 
            petWrapper.appendChild(petIdContainer);

            
            const petSpeciesContainer = document.createElement('div');
            petSpeciesContainer.className = 'pet-info-pairs';
            const petSpecies =  document.createElement('h1');
            petSpecies.textContent = 'Species:';
            const petSpeciesParagraph=  document.createElement('p');
            petSpeciesParagraph.textContent = pet.species ? pet.species : 'Species not available';
            petSpeciesContainer.append(petSpecies, petSpeciesParagraph); 
            petWrapper.appendChild(petSpeciesContainer);

            
            const petAgeContainer = document.createElement('div');
            petAgeContainer.className = 'pet-info-pairs';
            const petAge =  document.createElement('h1');
            petAge.textContent = 'Age:';
            const petAgeParagraph=  document.createElement('p');
            petAgeParagraph.textContent = pet.age ? pet.age : 'Age not available';
            petAgeContainer.append(petAge, petAgeParagraph); 
            petWrapper.appendChild(petAgeContainer);
            
    
            const petGenderContainer = document.createElement('div');
            petGenderContainer.className = 'pet-info-pairs';    
            const petGender =  document.createElement('h1');
            petGender.textContent  = 'Gender:';
            const petGenderParagraph=  document.createElement('p');
            petGenderParagraph.textContent = pet.gender ? pet.gender : 'Gender not available';
            petGenderContainer.append(petGender, petGenderParagraph); 
            petWrapper.appendChild(petGenderContainer);

           
            
            const petSizeContainer = document.createElement('div');
            petSizeContainer.className = 'pet-info-pairs';  
            const petSize =  document.createElement('h1');
            petSize.textContent = 'Size:';
            const petSizeParagraph=  document.createElement('p');
            petSizeParagraph.textContent = pet.size ? pet.size : 'size not available';
            petSizeContainer.append(petSize, petSizeParagraph); 
            petWrapper.appendChild(petSizeContainer);

            
            const petDescriptionContainer = document.createElement('div');
            petDescriptionContainer.className = 'pet-info-pair'; 
            const petDescription =  document.createElement('h1');
            petDescription.textContent  = 'Description:';
            const petDescriptionParagraph=  document.createElement('p');
            petDescriptionParagraph.textContent = pet.description ? pet.description : 'Description not available';
            petDescriptionContainer.append(petDescription, petDescriptionParagraph); 
            petWrapper.appendChild(petDescriptionContainer);
  

            const petAdopt =  document.createElement('h1');
            petAdopt.textContent  = 'Wanna know more?';
            const petAdoptH1 =  document.createElement('h1');
            petAdoptH1.textContent = 'Contact us:';
            const petAdoptParagraph = document.createElement('p');
            petAdoptParagraph.textContent = "adoptions@petfinder.com";
            document.getElementById('petfinder').appendChild(petAdopt);  
            petWrapper.appendChild(petAdopt);
            petWrapper.appendChild(petAdoptH1);
            petWrapper.appendChild(petAdoptParagraph);
    
            const favoriteButton = document.createElement('button');
            petWrapper.appendChild(favoriteButton);
    
            favoriteButton.textContent = pet.isFavorite ? '♥' : '♡'; 
            favoriteButton.className = 'favorite-button';
            favoriteButton.onclick = () => {
                pet.isFavorite = !pet.isFavorite; 
                favoriteButton.textContent = pet.isFavorite ? '♥' : '♡'; 
                saveFavorites(animals); 
            };
    
        });
    
    } 
    
    
     function saveFavorites(animals) { 
        const favorites = animals.filter(pet => pet.isFavorite); 
        localStorage.setItem('favoritePets', JSON.stringify(favorites)); 
    }
    
