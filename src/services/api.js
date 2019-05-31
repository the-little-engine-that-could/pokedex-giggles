import QUERY from '../../components/QUERY.js';

const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
const TYPEURL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=801';

const api = {
    getPokemon(queryProps) {
        const query = QUERY.stringify(queryProps);
        const url = `${URL}?${query}`;

        return fetch(url)
            .then(response => response.json());
    },

    getTypes() {
        return fetch(TYPEURL)
            .then(response => response.json());
    }
};

export default api;