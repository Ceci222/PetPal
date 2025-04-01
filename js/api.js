let allSpecies = new Set();  

const apiKey = 'YB2q2YeJVRD6KoJ9UhT7pseHo9Faw0dLte6T0rSVjWl8UAFoI4';
const apiSecret = '12whkXAIH7iVMzAZlsw49uffHp0JzfgN6hbH2ago';
const url = 'https://api.petfinder.com/v2/oauth2/token';

 export async function getAccessToken() {
  try {
     
    const response = await fetch(url, {
      method: 'POST',
      body: new URLSearchParams({
        'grant_type': 'client_credentials',
        'client_id': apiKey,
        'client_secret': apiSecret
      }),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    const data = await response.json();

   
    if (data.access_token) {
      console.log('Token de acceso:', data.access_token);
      return data.access_token; 
    } else {
      console.error('No se pudo obtener el token de acceso');
    }
  } catch (error) {
    console.error('Error al obtener el token:', error);
  }
}


export async function fetchAnimals() {
  const token = await getAccessToken();

  if (token) {
    const animalsUrl = 'https://api.petfinder.com/v2/animals';

    try {
      const response = await fetch(animalsUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.animals) {
        return data.animals;  
      } else {
        console.error('No se encontraron animales');
      }
    } catch (error) {
      console.error('Error al obtener los animales:', error);
    }
  }
}



function getAnimalSpecies(animals) {
  
  animals.forEach(animal => {
    if (animal.species) {
      allSpecies.add(animal.species);  
    }
  });

  
  const uniqueSpecies = Array.from(allSpecies);
  console.log('Especies encontradas:', uniqueSpecies);
}

 fetchAnimals();
