import Component from './Component.js';
import hashStorage from './hash-storage.js';
import TypeSelect from './TypeSelect.js';

class Filter extends Component {
    render() {
        const dom = this.renderDOM();
        const form = dom.querySelector('form');

        const typeSelect = new TypeSelect({ types: this.props.types });
        form.appendChild(typeSelect.render());
        
        const filter = {
            type: ''
        };

        form.addEventListener('input', () => {
            const filterObj = new FormData(form);
            filter.type = filterObj.get('type');
            console.log(filter.type);

            hashStorage.set({ type: filter.type });
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <section>
                <form>
                    <label>Filter By:</label>
                </form>
            </section>
        `;
    }
}

export default Filter;