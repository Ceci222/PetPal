import { renderAnimals}  from './petfinder.js';

document.getElementById('favorites-link').addEventListener('click', function(event) {
    event.preventDefault();  
      
    renderFavs(); 
});

   /*  const favsContainer = document.getElementById('favourites')
    const title = document.createElement('h1');
    title.textContent = 'Pets I would like to adopt';
    favsContainer.appendChild(title);  */

    function renderFavs() {
        const favsContainer = document.getElementById('favourites');
        favsContainer.innerHTML = '';  
    
        const homeMessage = document.getElementById('home');
        homeMessage.style.display = 'none';  
    
        
        const title = document.createElement('h1');  //Al ser SPA en función de dónde se genera el div en index.html varía que se renderice arriba o abajo
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
    
    


/* function renderFavs(animals) {
    const renderedFavs = animals.filter(pet => pet.isFavorite); 
    const favsContainer = document.getElementById('favorites');
    favsContainer.innerHTML = ''; 

    const title = document.createElement('h1');
    title.textContent = 'Pets I would like to adopt';
    favsContainer.appendChild(title); 

    if (renderedFavs.length === 0) {
        const noFavs = document.createElement('p');
        noFavs.textContent = 'No favourites yet';
        favsContainer.appendChild(noFavs);
        return;
    }

    renderAnimals(renderedFavs); 
}*/