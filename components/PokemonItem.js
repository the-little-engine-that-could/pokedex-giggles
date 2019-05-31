import Component from './Component.js';

class PokemonItem extends Component {
    renderTemplate() {
        const pokemon = this.props.pokemon;
        return /*html*/` 
            <li>
                <h2>${pokemon.pokemon}</h2>
                <img src="${pokemon.url_image}" alt="">
            </li>
        `;
    }
}

export default PokemonItem;
