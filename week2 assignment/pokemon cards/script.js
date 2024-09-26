document.getElementById('pokemon-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    // Prevents the page from refreshing when the form is submitted.

    const numCards = document.getElementById('num-cards').value; 
    // Gets the number of cards to display from the input field.

    const category = document.getElementById('category').value; 
    // Gets the selected Pokémon category/type from the dropdown.

    fetchPokemons(numCards, category); 
    // Calls the function to fetch and display Pokémon.
});

function fetchPokemons(numCards, category) {
    const pokemonContainer = document.getElementById('pokemon-container');
    pokemonContainer.innerHTML = ''; 
    // Clears the container before displaying new Pokémon cards.

    for (let i = 1; i <= numCards; i++) {
        // Loops through the number of cards to fetch data for each Pokémon by ID.

        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`) 
        // Fetches data for each Pokémon based on the ID from the API.
            .then(response => response.json()) 
            // Converts the fetched data to JSON format.
            .then(data => {
                if (category === "" || data.types.some(type => type.type.name === category)) {
                    // If no category is selected or if Pokémon matches the selected type, display it.
                    renderPokemonCard(data);
                }
            })
            .catch(error => {
                console.error('Error fetching Pokémon data:', error); 
                // Logs any errors that occur during the fetch process.
            });
    }
}

function renderPokemonCard(pokemon) {
    const pokemonContainer = document.getElementById('pokemon-container'); 
    // Gets the container to display the Pokémon cards.

    const card = document.createElement('div'); 
    card.classList.add('pokemon-card'); 
    // Creates a new div for the Pokémon card and adds a class for styling.

    card.innerHTML = `
        <h2>${pokemon.name}</h2> 
       

        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"> 
       

        <p>Type: ${pokemon.types.map(type => type.type.name).join(', ')}</p> 
        
    `;

    pokemonContainer.appendChild(card); 
    // Adds the Pokémon card to the container.
}
  