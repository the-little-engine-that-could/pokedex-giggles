import Component from './Component.js';
import Header from './Header.js';
import PokemonList from './PokemonList.js';

class App extends Component {
    render() {

        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const pokemonList = new PokemonList();
        main.appendChild(pokemonList.render());

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