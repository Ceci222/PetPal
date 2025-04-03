import { apiKey, apiSecret, url } from "./apikey.js";

let allSpecies = new Set();  



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
      console.log('Access token:', data.access_token);
      return data.access_token; 
    } else {
      console.error('Unable to get token');
    }
  } catch (error) {
    console.error('Error getting token:', error);
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
        console.error('No animals found');
      }
    } catch (error) {
      console.error('Error fetching animals:', error);
    }
  }
}



/* function getAnimalSpecies(animals) {
  
  animals.forEach(animal => {
    if (animal.species) {
      allSpecies.add(animal.species);  
    }
  });

  
  const uniqueSpecies = Array.from(allSpecies);
  console.log('Found Species:', uniqueSpecies);
} */

 fetchAnimals();
