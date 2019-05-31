import Component from './Component.js';
import TypeOptions from './TypeOptions.js';

class TypeSelect extends Component {

    render() {
        const types = this.props.types;
        const menu = this.renderDOM();
        const select = menu.querySelector('select');
        menu.appendChild(select);
        
        types.unshift('all');

        types.forEach(type => {
            const typeOptions = new TypeOptions({ type });
            select.appendChild(typeOptions.render());

        });

        return menu;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <select name="type">
                </select>
            </div>
        `;
    }
}

export default TypeSelect;
