import Component from './Component.js';
import Search from './Search.js';

class Header extends Component {

    render() {

        const dom = this.renderDOM();
        const search = new Search();
        dom.appendChild(search.render());


        return dom;

    }


    renderTemplate() {
        return `
            <header>
                <h1>Pokédex</h1>
            </header>
        `;
    }
}
export default Header;