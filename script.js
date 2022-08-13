
// Functie om lijst met gerechten op te halen 

fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  });


