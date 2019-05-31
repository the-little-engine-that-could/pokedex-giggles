import Component from './Component.js';
import TypeOptions from './TypeOptions.js';

class TypeSelect extends Component {

    render() {
        const menu = this.renderDOM();
        const select = menu.querySelector('select');
        console.log(select);
        menu.appendChild(select);
        const typeOptions = new TypeOptions();
        select.appendChild(typeOptions.render());
        return menu;
    }

    renderTemplate() {
        // const pokemon = this.props.pokemon;
        // console.log(this.props);
        return /*html*/ `
            <div>
                <select class="name">
                </select>
            </div>
        `;
    }
}

export default TypeSelect;