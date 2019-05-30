const URL = 'https://cors-anywhere.herokuapp.com/https://alchemy-pokedex.herokuapp.com/api/pokedex';

const api = {
    getPokemon() {
        let url = URL;

        // const searchParams = new URLSearchParams();

        return fetch(url)
            .then(response => response.json());
    }
};

export default api;