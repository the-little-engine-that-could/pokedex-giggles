import Component from './Component.js';

class TypeOptions extends Component {

    renderTemplate() {
        // const pokemon = this.props.pokemon;
        // console.log(this.props);
        return /*html*/ `
            <select class="name">
                <option class="stuff"></option>
            </select>
        `;
    }
}

export default TypeOptions;