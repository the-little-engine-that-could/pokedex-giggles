import Component from './Component.js';

class TypeOptions extends Component {

    renderTemplate() {
        const type = this.props.type;
        return /*html*/ `
                <option class="${type}">${type}</option>
        `;
        
    }
}

export default TypeOptions;