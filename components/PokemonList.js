import Component from './Component.js';
import PokemonItem from './PokemonItem.js';

class PokemonList extends Component {

    render() {
        const list = this.renderDOM();
        
        const pokemonItem = new PokemonItem();
        list.appendChild(pokemonItem.render());

        return list;
    }

    renderTemplate() {
        return `
            <ul class="pokemon-list">
            
            </ul>
        `;
    }
}

export default PokemonList;
