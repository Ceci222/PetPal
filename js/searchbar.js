import { fetchAnimals } from './index.js';
import { renderAnimals } from './petfinder.js';

document.getElementById('search-button').addEventListener('click', async (event) => {
    event.preventDefault();
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim().toLowerCase();
    const animals = await fetchAnimals(query);
    
    searchInput.value = '';

    const petfinderSection = document.getElementById('petfinder');
    petfinderSection.innerHTML = '';
    petfinderSection.style.display = 'flex';

    const homeSection = document.getElementById('home');
    homeSection.style.display = 'none';
    const favouritesSection = document.getElementById('favourites');
    favouritesSection.style.display = 'none';
    const contactSection = document.getElementById('contact');
    contactSection.style.display = 'none';

    if (animals.length > 0) {
        const filteredAnimals = animals.filter(animal => animal.species.toLowerCase() === query);
        if (filteredAnimals.length > 0) {
            renderAnimals(filteredAnimals);
        } else {
            const noResults = document.createElement('p');
            noResults.textContent = `Sorry, no ${query} found`;
            petfinderSection.appendChild(noResults);
        }
    } else {
        const noResults = document.createElement('p');
        noResults.textContent = `Sorry, no ${query} found`;
        petfinderSection.appendChild(noResults);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-bar");
  
    if (searchButton && searchInput) {
      searchButton.addEventListener("click", async () => {
        const query = searchInput.value.trim();
        if (query) {
          console.log("Searching for:", query);
          const animals = await fetchAnimals();
          console.log(animals); 
        }
      });
    }
});



  