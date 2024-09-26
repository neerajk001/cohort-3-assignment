document.getElementById("pokemon-form").addEventListener('submit',function(event){
    event.preventDefault();

    const numCards =document.getElementById('num-cards').value 
    const category =document.getElementById('category').value 

    fetchPokemons( numCards ,category)


})