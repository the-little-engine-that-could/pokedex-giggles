import Component from './Component.js';

class PokemonItem extends Component {
    renderTemplate() {
        return ` 
            <li>
                <h2>venusaur</h2>
                <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" alt="">
            </li>
        `;

    }
}

export default PokemonItem;