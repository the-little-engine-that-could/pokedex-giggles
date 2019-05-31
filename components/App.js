import Component from './Component.js';
import Header from './Header.js';
import PokemonList from './PokemonList.js';
import api from '../src/services/api.js';
import Loading from './Loading.js';
import Paging from './Paging.js';
import hashStorage from './hash-storage.js';

class App extends Component {
    render() {

        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const paging = new Paging({ totalCount: 0 });
        main.appendChild(paging.render());

        const pokemonList = new PokemonList({ allPokemon: [] });
        main.appendChild(pokemonList.render());

        const loading = new Loading({ loading: false });
        main.appendChild(loading.render());

        function loadPokedex() {
            const queryProps = hashStorage.get();

            loading.update({ loading: true });

            api.getPokemon(queryProps)
                .then(response => {
                    const allPokemon = response.results;
                    pokemonList.update({ allPokemon });

                    const totalCount = allPokemon.count;
        
                    paging.update({ totalCount });
                })
                .finally(() => {
                    loading.update({ loading: false });
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