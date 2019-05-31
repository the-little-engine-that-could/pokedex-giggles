import QUERY from '../../components/QUERY.js';

const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

const api = {
    getPokemon(queryProps) {
        const query = QUERY.stringify(queryProps);
        const url = `${URL}?${query}`;

        return fetch(url)
            .then(response => response.json());
    }
};

export default api;