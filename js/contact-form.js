
function contactClickHandler(event) {
    event.preventDefault(); 
    showContactForm();  
    
    //document.getElementById('contact').removeEventListener('click', contactClickHandler);
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

    contactSection.innerHTML = ""; //primero busco los elementos del html y luego lo limpioio
 
    //Campo name

    const contactH1 = document.createElement('h1');

    contactH1.textContent = 'Contact us';

    const labelName = document.createElement('label');

    labelName.setAttribute('for','name'); // estoy diciendo que el for y el id ambos seran name y estaran realcionados

    labelName.textContent = 'Name'; //lo que verá el usuario en la etiqueta

    const inputName =  document.createElement('input');

    inputName.setAttribute('type', 'text') //debo determinar como primer arg que me refiero al tipo y luego el segundo indicará que es tipo texto, podría ser email, password...

    inputName.setAttribute('id', 'name') //establezco que el id será name

    inputName.setAttribute('placeholder', 'Your name');

    inputName.setAttribute('required', true); //el true se puede reemplazar por comillas vacías o repetir "required"

    

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

   /*  <label for="message">Message</label>
    <textarea name="message" id="message" required>Message</textarea> */

    const textareaLabel = document.createElement('label');

    textareaLabel.setAttribute('for', 'message');

    textareaLabel.textContent = 'Message';


    const textareaInput = document.createElement('textarea');
    
    textareaInput.setAttribute('name', 'message');

    textareaInput.setAttribute('id', 'message');

    textareaInput.setAttribute('placeholder', 'Message')

    textareaInput.setAttribute('required', true);

    //Botón enviar

    // <button class="submit button" type="submit"> Submit </button>

    const submitButton = document.createElement('button');

    submitButton.setAttribute('type', 'submit');

    submitButton.textContent = 'Submit';

    submitButton.setAttribute('class', 'submit button'); //debo añadir ambas clases en un mismo atributo o usar submitButton.classList.add('submit', 'button');

    //Añadir los elementos creados, los puedo agregar a medida que se crean o al final todos juntos

    contactSection.appendChild(contactH1);
    contactSection.appendChild(labelName);
    contactSection.appendChild(inputName);
    contactSection.appendChild(labelEmail);
    contactSection.appendChild(inputEmail);
    contactSection.appendChild(textareaLabel);
    contactSection.appendChild(textareaInput);
    contactSection.appendChild(submitButton);

    
} 


