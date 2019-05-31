import Component from './Component.js';
import Header from './Header.js';
import PokemonList from './PokemonList.js';
import api from '../src/services/api.js';
import Loading from './Loading.js';
import Paging from './Paging.js';
import hashStorage from './hash-storage.js';
import Filter from './Filter.js';
import getTypes from '../src/getTypes.js';




class App extends Component {
    render() {


        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const paging = new Paging({ totalCount: 0 });
        main.appendChild(paging.render());

        const filter = new Filter({ types: [] });
        main.appendChild(filter.render()); 

        api.getTypes()
            .then(response => response.results)
            .then(results => {
                return results.map(i => i.type_1);
            })
            .then(types => [...new Set(types)])
            .then(types => filter.update({ types }));


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

                    const totalCount = response.count;
        
                    paging.update({ totalCount });
                })
                .finally(() => {
                    loading.update({ loading: false });
                });
        }

        loadPokedex();

        window.addEventListener('hashchange', () => {
            loadPokedex();
        });

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