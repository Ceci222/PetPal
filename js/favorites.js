import { renderAnimals}  from './petfinder.js';

document.getElementById('favorites-link').addEventListener('click', function(event) {
    event.preventDefault();  
      
    renderFavs(); 
});



    function renderFavs() {

        const favsContainer = document.getElementById('favourites');
        const homeSection = document.getElementById('home'); 
        const petfinderSection = document.getElementById('petfinder'); 
        const contactSection = document.getElementById('contact'); 

        favsContainer.style.display = 'block';  
        homeSection.style.display = 'none';  
        petfinderSection.style.display = 'none'; 
        contactSection.style.display = 'none'; 

        favsContainer.innerHTML = ''
        
        const title = document.createElement('h1');  
        title.textContent = 'Pets I would like to adopt';
        favsContainer.appendChild(title);
    
        const myFavs = JSON.parse(localStorage.getItem('favoritePets')) || []; 
    
        if (myFavs.length === 0) {
            const noFavs = document.createElement('p');
            noFavs.textContent = 'No favourites yet';
            favsContainer.appendChild(noFavs);
            return; 
        }
    
        renderAnimals(myFavs);
    }
    
    