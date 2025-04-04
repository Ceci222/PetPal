
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
    
    homeMessage.innerHTML="";
    const petWrapper = document.getElementById('petfinder');

    petWrapper.innerHTML = '';

    const homeContent = document.createElement('div');
    homeContent.className = 'home-content';
    
    const homeH1 = document.createElement('h1')
    
    homeH1.innerHTML = 'PetPal <span class="material-icons">pets</span>';

    const homeParagraph = document.createElement('p');

    homeParagraph.textContent = "Change a life today — your new best friend is waiting."

    const homeImg = document.createElement('img');

    homeImg.setAttribute('src', './assets/krista-mangulsone-9gz3wfHr65U-unsplash.jpg');

    homeImg.setAttribute('alt', 'img');


    homeContent.appendChild(homeH1);
    homeContent.appendChild(homeParagraph);
    homeMessage.appendChild(homeImg);
    homeMessage.appendChild(homeContent);

} 
