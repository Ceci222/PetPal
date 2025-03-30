

document.addEventListener('DOMContentLoaded', function(event) {
    event.preventDefault();  
    showHome(); 
}); 


function showHome(){

    const homeMessage = document.getElementById('home-message');

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



document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    showContactForm(); 
});


function showContactForm(){
    const contactSection = document.getElementById('contact');

    const indexMessage = document.getElementById('index-message');

    indexMessage.style.display = 'none'; //tengo que hacer lo mismo con las demás secciones
    
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