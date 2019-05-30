import Component from './Component.js';

class PokemonItem extends Component {
    renderTemplate() {
        const pokemon = this.props.pokemon;
        return /*html*/` 
            <li>
                <h2>${pokemon.pokemon}</h2>
                <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" alt="">
            </li>
        `;

    }
}

export default PokemonItem;