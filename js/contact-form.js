
function contactClickHandler(event) {
    event.preventDefault(); 
    showContactForm();  
    
} 


  document.getElementById('contact-link').addEventListener('click', contactClickHandler);
 

function showContactForm(){
    
    const contactSection = document.getElementById('contact');
    const homeSection = document.getElementById('home');  
    const petfinderSection = document.getElementById('petfinder');  
    const favouritesSection = document.getElementById('favourites'); 

    contactSection.style.display = 'flex'; 
    homeSection.style.display = 'none'; 
    petfinderSection.style.display = 'none';  
    favouritesSection.style.display = 'none';  

    contactSection.innerHTML = ""; 
 
    //Campo name

    const contactH1 = document.createElement('h1');

    contactH1.textContent = 'Contact us';

    const labelName = document.createElement('label');

    labelName.setAttribute('for','name'); 

    labelName.textContent = 'Name';

    const inputName =  document.createElement('input');

    inputName.setAttribute('type', 'text') 

    inputName.setAttribute('id', 'name') 

    inputName.setAttribute('placeholder', 'Your name');

    inputName.setAttribute('required', true); 

    

    // Campo email

    const labelEmail = document.createElement('label');

    labelEmail.setAttribute('for', 'email');

    labelEmail.textContent = 'Email';


    const inputEmail = document.createElement('input');

    inputEmail.setAttribute('type', 'email');

    inputEmail.setAttribute('id', 'email');

    inputEmail.setAttribute('placeholder', 'Your Email');

    inputEmail.setAttribute('required', true);


    // Textarea

    const textareaLabel = document.createElement('label');

    textareaLabel.setAttribute('for', 'message');

    textareaLabel.textContent = 'Message';


    const textareaInput = document.createElement('textarea');
    
    textareaInput.setAttribute('name', 'message');

    textareaInput.setAttribute('id', 'message');

    textareaInput.setAttribute('placeholder', 'Message')

    textareaInput.setAttribute('required', true);

    //Botón enviar


    const submitButton = document.createElement('button');

    submitButton.setAttribute('type', 'submit');

    submitButton.textContent = 'Submit';

    submitButton.setAttribute('class', 'submit button'); 

  

    contactSection.appendChild(contactH1);
    contactSection.appendChild(labelName);
    contactSection.appendChild(inputName);
    contactSection.appendChild(labelEmail);
    contactSection.appendChild(inputEmail);
    contactSection.appendChild(textareaLabel);
    contactSection.appendChild(textareaInput);
    contactSection.appendChild(submitButton);

    
} 


