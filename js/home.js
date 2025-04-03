
document.getElementById('home-link').addEventListener('click', function(event) {
    event.preventDefault();  
      
    showHome(); 
});

document.addEventListener('DOMContentLoaded', function(event) {
    event.preventDefault();  
    showHome(); 
});  

 

function showHome(){

    const homeMessage = document.getElementById('home');
    homeMessage.style.display = 'flex';

    const petfinderSection = document.getElementById('petfinder');
    const favouritesSection = document.getElementById('favourites');
    const contactSection = document.getElementById('contact');

    petfinderSection.style.display = 'none';
    favouritesSection.style.display = 'none';
    contactSection.style.display = 'none';
    
    homeMessage.innerHTML="";//debo resetear el contenido antes para que no se mantengan los elementos creados previamente
    
    const petWrapper = document.getElementById('petfinder');

    petWrapper.innerHTML = '';
    
    const homeH1 = document.createElement('h1')

    homeH1.textContent = 'PetPal';

    const homeParagraph = document.createElement('p');

    homeParagraph.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit."

    const homeImg = document.createElement('img');

    homeImg.setAttribute('src', './assets/krista-mangulsone-9gz3wfHr65U-unsplash.jpg');

    homeImg.setAttribute('alt', 'img');


    homeMessage.appendChild(homeH1);
    homeMessage.appendChild(homeParagraph);
    homeMessage.appendChild(homeImg);

} 
