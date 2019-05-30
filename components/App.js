import Component from './Component.js';
import Header from './Header.js';
import PokemonList from './PokemonList.js';
import api from '../src/services/api.js';

class App extends Component {
    render() {

        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const pokemonList = new PokemonList({ allPokemon: [] });
        main.appendChild(pokemonList.render());

        function loadPokedex() {

            api.getPokemon()
                .then(response => {
                    const allPokemon = response.results;
                    pokemonList.update({ allPokemon });
                });
        }

        loadPokedex();

        return dom;

    }

    renderTemplate() {
        return `
            <div>
                <main></main>
            </div>
        `;
    }
}

export default App;