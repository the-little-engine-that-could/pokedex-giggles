import api from '../src/services/api.js';



function getTypes() {
    
    api.getPokemon('')
        .then(response => {
            const allPokemon = response.result;
            console.log('.then promise result', allPokemon);
        });
}


export default getTypes;